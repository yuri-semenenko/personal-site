import { test, expect } from "@playwright/test";
import { ACTIVE_LOCALES, DEFAULT_LOCALE, localePath } from "../../src/lib/locales";
import { getContent } from "../../src/content";

for (const locale of ACTIVE_LOCALES) {
  const path = localePath(locale);
  const { profile, navigation, ui } = getContent(locale);
  const experienceItem = navigation.items.find((item) => item.sectionId === "experience");
  const firstNavItem = navigation.items[0];
  const lastNavItem = navigation.items[navigation.items.length - 1];

  test.describe(`Landing page smoke (${locale})`, () => {
    test("loads with title, lang, landmarks, and hero headline", async ({ page }) => {
      await page.goto(path);

      await expect(page).toHaveTitle(new RegExp(profile.name));
      await expect(page.locator("html")).toHaveAttribute("lang", locale);

      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("main")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();

      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });

    test("primary nav anchors scroll to their sections", async ({ page }) => {
      await page.goto(path);

      const primaryNav = page.getByRole("navigation", { name: ui.a11y.primaryNav });
      const experienceLink = primaryNav.getByRole("link", { name: experienceItem!.label });

      await experienceLink.click();

      await expect(page).toHaveURL(/#experience$/);
      await expect(page.locator("#experience-heading")).toBeInViewport();
    });

    test("theme toggle switches between light and dark", async ({ page }) => {
      await page.goto(path);

      const html = page.locator("html");
      const initialIsDark = await html.evaluate((el) => el.classList.contains("dark"));

      const toggle = page.getByRole("button", {
        name: new RegExp(`${ui.a11y.switchToLightTheme}|${ui.a11y.switchToDarkTheme}`, "i"),
      });
      await toggle.click();

      await expect.poll(async () => html.evaluate((el) => el.classList.contains("dark"))).toBe(!initialIsDark);
    });

    test("CV download link points to a reachable PDF", async ({ page }) => {
      await page.goto(path);

      const cvLink = page.getByRole("link", { name: profile.cv.ariaLabel }).first();
      const href = await cvLink.getAttribute("href");
      expect(href).toBe(profile.cv.fileUrl);

      const response = await page.request.get(href!);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("pdf");
    });

    test("mobile menu opens and reveals navigation on small viewport", async ({ browser }) => {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
      const page = await context.newPage();
      try {
        await page.goto(path);

        const trigger = page.getByRole("button", { name: ui.a11y.openMenu });
        await trigger.click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();
        await expect(dialog.getByRole("link", { name: firstNavItem.label })).toBeVisible();
        await expect(dialog.getByRole("link", { name: lastNavItem.label })).toBeVisible();
      } finally {
        await context.close();
      }
    });

    test("mobile menu closes when resized to desktop viewport", async ({ browser }) => {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
      const page = await context.newPage();
      try {
        await page.goto(path);

        await page.getByRole("button", { name: ui.a11y.openMenu }).click();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await page.setViewportSize({ width: 1024, height: 844 });

        await expect(dialog).toBeHidden();
      } finally {
        await context.close();
      }
    });
  });
}

test.describe("Locale routing", () => {
  test(`/${DEFAULT_LOCALE} permanently redirects to the unprefixed root`, async ({ page }) => {
    const response = await page.request.get(`/${DEFAULT_LOCALE}`, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers()["location"]).toBe("/");
  });

  test("unknown locale prefix returns 404", async ({ page }) => {
    const response = await page.request.get("/xx", { maxRedirects: 0 });
    expect(response.status()).toBe(404);
  });
});

test.describe("View mode", () => {
  const path = localePath(DEFAULT_LOCALE);
  const { ui } = getContent(DEFAULT_LOCALE);

  test("desktop horizontal mode persists and remaps wheel scrolling", async ({ page }) => {
    await page.goto(path);

    await page.getByRole("button", { name: ui.viewMode.switchToHorizontal }).click();

    const main = page.getByRole("main");
    await expect(main).toHaveAttribute("data-view-mode-main", "horizontal");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("view-mode"))).toBe("horizontal");

    const initialScrollLeft = await main.evaluate((el) => el.scrollLeft);
    await page.locator("[data-view-mode-panel]").first().hover();
    await page.mouse.wheel(0, 700);

    await expect.poll(() => main.evaluate((el) => el.scrollLeft)).toBeGreaterThan(initialScrollLeft);
  });

  test("mobile keeps vertical layout even with a horizontal preference", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    try {
      await page.addInitScript(() => localStorage.setItem("view-mode", "horizontal"));
      await page.goto(path);

      await expect(page.getByRole("main")).toHaveAttribute("data-view-mode-main", "vertical");
      await expect(page.getByRole("button", { name: ui.viewMode.switchToHorizontal })).toBeHidden();
    } finally {
      await context.close();
    }
  });
});
