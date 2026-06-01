import { test, expect } from "@playwright/test";

test.describe("Landing page smoke", () => {
  test("loads with title, landmarks, and hero headline", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Yuri Semenenko/);

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("primary nav anchors scroll to their sections", async ({ page }) => {
    await page.goto("/");

    const primaryNav = page.getByRole("navigation", { name: "Primary" });
    const experienceLink = primaryNav.getByRole("link", { name: "Experience" });

    await experienceLink.click();

    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator("#experience-heading")).toBeInViewport();
  });

  test("theme toggle switches between light and dark", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    const initialIsDark = await html.evaluate((el) => el.classList.contains("dark"));

    const toggle = page.getByRole("button", { name: /switch to (light|dark) theme/i });
    await toggle.click();

    await expect.poll(async () => html.evaluate((el) => el.classList.contains("dark"))).toBe(!initialIsDark);
  });

  test("CV download link points to a reachable PDF", async ({ page }) => {
    await page.goto("/");

    const cvLink = page.getByRole("link", { name: "Download Yuri Semenenko CV" }).first();
    const href = await cvLink.getAttribute("href");
    expect(href).toBe("/files/yuri-semenenko-senior-frontend-engineer-cv.pdf");

    const response = await page.request.get(href!);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("pdf");
  });

  test("mobile menu opens and reveals navigation on small viewport", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    try {
      await page.goto("/");

      const trigger = page.getByRole("button", { name: "Open menu" });
      await trigger.click();

      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();
      await expect(dialog.getByRole("link", { name: "About" })).toBeVisible();
      await expect(dialog.getByRole("link", { name: "Contact" })).toBeVisible();
    } finally {
      await context.close();
    }
  });
});
