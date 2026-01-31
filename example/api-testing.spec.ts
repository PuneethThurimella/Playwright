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

test('mock api users response', async ({ page }) => {
  await page.route('**/api/users', async (route) => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify([{ "name": "John" }]),
      status: 200
    });
  });
  await page.goto('https://your-app-url.com');
  await expect(page.locator('text=John')).toBeVisible();
});
