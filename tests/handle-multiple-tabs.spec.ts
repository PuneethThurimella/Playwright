import { test } from '../fixtures/fixture';

test('Handle two windows or tabs', { tag: ['@smoke', '@regression'] }, async ({page, loginPage }) => {
    await page.goto('https://www.amazon.in');    
    await loginPage.login('Admin', 'Admin123');
    
    const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('#openTab')
    ]);
    await newPage.waitForLoadState();
});