import { test } from '../fixtures/fixture';

test('Sample test', { tag: ['@smoke', '@regression'] }, async ({page, loginPage }) => {
    await page.goto('https://www.amazon.in');    
    await loginPage.login('Admin', 'Admin123');
    // How do you handle two windows or tabs
    const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('#openTab')
    ]);
    await newPage.waitForLoadState();
});