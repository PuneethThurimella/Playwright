import { test, expect } from "@playwright/test";

test("Network interception / Network validation in UI", async ({ page }) => {
  await page.goto("https://github.com/microsoft/playwright");
  await expect(page).toHaveTitle(/microsoft/i);
  const apiPromise = page.waitForResponse((res) => res.url().includes("main") 
    && res.status() === 200 
    && res.request().method() === "GET");
  const apiResponse = await apiPromise;
  expect(apiResponse.ok()).toBeTruthy();
  const responseBody = await apiResponse.json();
  console.log("API response:", responseBody);
});
