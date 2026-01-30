import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Welcome');
});

test('upload file', async ({ page }) => {
  await page.goto('https://example.com/upload');
  await page.locator('#fileUpload').setInputFiles('resume.pdf');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByText('File uploaded successfully')).toBeVisible();
});

test.use({ storageState: 'admin.json' });
test('admin dashboard', async ({ page }) => {
  await page.goto('https://example.com/dashboard');
  await expect( page.getByRole('heading')).toContainText('Admin Dashboard');
});

test('create order', async ({ page }) => {
  await page.goto('https://example.com');
  const [response] = await Promise.all([
    page.waitForResponse(res => res.url().includes('/api/orders')),
    page.getByRole('button', { name: 'Create Order' }).click()
  ]);
  expect(response.status()).toBe(200);
  await expect(page.getByText('Order created')).toBeVisible();
});

test('save auth state', async ({ page }) => {
  // login and save auth state
  await page.context().storageState({ path: 'admin.json' });
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

test('wait for loader', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('#loader')).toBeHidden();
  await expect(page.getByText('Results loaded')).toBeVisible();
});

test('save profile', async ({ page }) => {
  await page.goto('https://example.com');
  const [response] = await Promise.all([
    page.waitForResponse(res => res.url().includes('/api/profile')),
    page.getByRole('button', { name: 'Save' }).click()
  ]);
  expect(response.status()).toBe(200);
});


