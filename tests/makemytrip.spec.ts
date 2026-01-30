import { test, expect } from "@playwright/test";

test("makemytrip", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("url");
});
