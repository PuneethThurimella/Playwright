import { test, expect } from "@playwright/test";

test("Wipro", async ({ page }) => {
  await page.goto("https://trytestingthis.netlify.app/");
});
