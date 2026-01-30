import { test, expect } from "@playwright/test";

test("common", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("url");
  await page.context().storageState({ path: ".admin.json" });
  await page.locator(".id").setInputFiles("filename.pdf");
  await page.locator(".id").selectOption("dropdownValue");
});

test.use({ storageState: ".admin.json" });
