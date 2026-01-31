import { test, expect } from "@playwright/test";

test("Sample UI Test", { tag: ["@smoke", "@regression"] }, async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(page.getByRole("heading", { name: "Installation" }),).toBeVisible();
});
