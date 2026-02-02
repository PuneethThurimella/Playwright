import { test, expect } from "@playwright/test";

test("yatra", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("https://www.yatra.com/");
  const cross = page.locator("section img[alt='cross']");
  await cross.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
  if (await cross.isVisible()) {
    await cross.click();
  }
  await page.locator("p[title='New Delhi']").click();
  await page.locator("#input-with-icon-adornment").fill("Bangalore");
  await page.pause();

});
