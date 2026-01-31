import { test, expect } from '../pages/fixture';

test('Handle two windows or tabs', { tag: ['@smoke', '@regression'] }, async ({page, loginPage }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);

    const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('.header-github-link')
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(/microsoft/);
});

test('multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  await page1.goto('https://playwright.dev/');

  const page2 = await context.newPage();
  await page2.goto('https://google.com');
  await page1.bringToFront();
  await page2.close();
});
