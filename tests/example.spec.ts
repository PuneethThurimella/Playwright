import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('login API validation', async ({ request }) => {
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
