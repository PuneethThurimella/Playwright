import { test, expect } from "@playwright/test";

test("Wipro", async ({ page }) => {
  await page.goto("https://trytestingthis.netlify.app/");
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('Puneeth'); 
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('Thurimella');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByLabel('Choose an option:').selectOption('option 2');
  await page.locator('input[name="option2"]').check();
  await page.locator('input[name="option3"]').check();
  await page.locator('input[name="Options"]').fill('Strawberry');
  await page.locator('#day').fill('2000-04-08');
  await page.locator('[id="a"]').fill('26');
  await page.locator('input[type="file"]').setInputFiles('C:/Users/jagad/Downloads/Puneeth Thurimella-Testing-Resume.pdf');
  await page.getByText('The cat was playing in the').click();
  await page.getByRole('spinbutton', { name: 'Select a quantity from a' }).fill('5');
  await page.getByText('The cat was playing in the').fill('Puneeth Playwright');
  await page.pause();
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // const page1 = await page1Promise;
  // await page.pause();
});
