import { test, expect } from "@playwright/test";

test("makemytrip", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("https://www.makemytrip.com/");
  const cross = page.locator("[data-cy='closeModal']");
  await cross.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
  if (await cross.isVisible()) {
    await cross.click();
    await page.pause();
  }
});
