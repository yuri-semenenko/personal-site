import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

async function setTheme(page: import("@playwright/test").Page, theme: "light" | "dark") {
  // next-themes stores under "theme" by default; set before navigation so SSR/hydration matches.
  await page.addInitScript((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {
      // ignore
    }
  }, theme);
}

test.describe("Landing page A11y (axe)", () => {
  test("no WCAG 2.1 AA violations — dark theme", async ({ page }) => {
    await setTheme(page, "dark");
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/dark/);

    const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

    expect.soft(results.violations, formatViolations(results.violations)).toEqual([]);
  });

  test("no WCAG 2.1 AA violations — light theme", async ({ page }) => {
    await setTheme(page, "light");
    await page.goto("/");
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

    expect.soft(results.violations, formatViolations(results.violations)).toEqual([]);
  });

  test("no WCAG 2.1 AA violations — mobile menu open (dark)", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    try {
      await setTheme(page, "dark");
      await page.goto("/");
      await expect(page.locator("html")).toHaveClass(/dark/);

      await page.getByRole("button", { name: "Open menu" }).click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();
      // Base UI Sheet animates opacity 0→1 over ~200ms; scanning mid-transition makes axe
      // read a partially-transparent button color and report a false contrast violation.
      await expect.poll(async () => dialog.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");

      const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

      expect.soft(results.violations, formatViolations(results.violations)).toEqual([]);
    } finally {
      await context.close();
    }
  });
});

function formatViolations(violations: Awaited<ReturnType<AxeBuilder["analyze"]>>["violations"]) {
  if (violations.length === 0) return "no violations";
  return violations
    .map(
      (v) =>
        `[${v.id}] ${v.impact ?? "?"} — ${v.help}\n  ${v.helpUrl}\n  nodes: ${v.nodes
          .map((n) => n.target.join(" "))
          .join(" | ")}`,
    )
    .join("\n\n");
}
