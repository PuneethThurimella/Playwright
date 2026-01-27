import { test, expect } from '../fixtures/fixture';

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