import { test, expect } from "@playwright/test";

test("yatra", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("https://www.yatra.com/");
  const cross = page.locator("//section//img[@alt='cross']");
  if (await cross.isVisible()) {
    await cross.click();
    await page.pause();
  }
});
