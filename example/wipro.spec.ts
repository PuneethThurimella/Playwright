import { test, expect } from "@playwright/test";

test("Wipro", async ({ page }) => {
  await page.goto("https://trytestingthis.netlify.app/");
  await page.getByLabel('First name').fill('Admin');
  await page.getByLabel('Last name').fill('password');
  await page.locator('#male').click();
  await page.pause();
});
