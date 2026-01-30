import { test, expect } from "@playwright/test";

test("yatra", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("url");
});
