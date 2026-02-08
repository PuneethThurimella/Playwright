import { test, expect } from "@playwright/test";

test("Wipro", async ({ page }) => {
  await page.goto("https://trytestingthis.netlify.app/");
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('Puneeth'); 
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
  const firstNames = await page.locator("table tbody tr td:nth-child(1)").allTextContents();
  const lastNames  = await page.locator("table tbody tr td:nth-child(2)").allTextContents();
  console.log(firstNames);
  console.log(lastNames);
  await page.locator("#drag1").dragTo(page.locator("#div1"));
  await page.pause();
  // await page.getByRole('textbox', { name: 'Username:' }).click();
  // await page.getByRole('textbox', { name: 'Username:' }).fill('Puneeth');
  // await page.getByRole('textbox', { name: 'Password:' }).click();
  // await page.getByRole('textbox', { name: 'Password:' }).fill('Password');
  // page.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  // });
  // await page.getByRole('button', { name: 'Login' }).click();
 

  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // const page1 = await page1Promise;
  // await page.pause();
});
