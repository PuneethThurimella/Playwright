import { test, expect } from '@playwright/test';

test("API Test", { tag: ['@smoke', '@regression'] }, async ({ request }) => {
  const response = await request.post("https://httpbin.org/post", {
    data: {
      username: "admin",
      password: "admin123"
    }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.json.username).toBe("admin");
  console.log(body.json);
});

test('Sample UI Test', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
