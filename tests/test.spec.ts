import { test } from '../fixtures/fixture';

test('Sample test', { tag: ['@smoke', '@regression'] }, async ({page, loginPage }) => {
    await page.goto('https://www.amazon.in');    
    await loginPage.login('Admin', 'Admin123');
});