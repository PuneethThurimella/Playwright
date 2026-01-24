import { test, expect } from '@playwright/test';

test('API Testing', async ({ request }) => {
  const response = await request.post('/api/login', {
    data: {
      username: 'admin',
      password: 'admin123'
    }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.userId).toBeGreaterThan(0);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
