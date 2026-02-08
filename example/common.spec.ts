import { test, expect } from '@playwright/test';

test('Common Tricky', async ({ page }) => {
  await page.locator('#fileUpload').setInputFiles('resume.pdf');
  await expect(page.getByText('File uploaded successfully')).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Uploaded');
  await expect(page.locator('#loader')).toBeHidden();

});

test.use({ storageState: 'admin.json' });
test('admin dashboard', async ({ page }) => {
  await page.goto('https://example.com/dashboard');
  await expect( page.getByRole('heading')).toContainText('Admin Dashboard');
});

test('create order', async ({ page }) => {
  const [response] = await Promise.all([
    page.waitForResponse(res => res.url().includes('/api/orders')),
    page.getByRole('button', { name: 'Create Order' }).click()
  ]);
  expect(response.status()).toBe(200);
  await expect(page.getByText('Order created')).toBeVisible();
});

test('save auth state', async ({ page }) => {
  await page.context().storageState({ path: 'admin.json' });
});

test('Tricky', async ({page}) => {
  // hidden web elements locators
  await page.waitForSelector('#hiddenElement', { state: 'attached' });
  await expect(page.locator('#hiddenDiv')).toBeHidden();
  await page.click('#hiddenButton', { force: true });
  // prefer data-test-id or accessibility attributes
  page.locator('[id^="user_"]');     // starts with
  page.locator('[id*="login"]');    // contains
  page.locator('[class$="active"]');// ends with
  // I trigger the dropdown, wait for options to load, and select values using visible text or accessibility roles instead of indexes or dynamic IDs.
  await page.getByRole('combobox').click();
  await page.getByPlaceholder('Search city').fill('Hyd');
  await page.getByRole('option', { name: /hyd/i }).click();
})


