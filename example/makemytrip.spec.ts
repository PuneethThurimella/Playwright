import { test } from "@playwright/test";

test("makemytrip", { tag: ["@smoke"] }, async ({ page }) => {
  const departureDate = getAriaDate(1);
  const returnDate = getAriaDate(7);
  await page.goto("https://www.makemytrip.com/");
  const cross = page.locator('.commonModal__close');
  await cross.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
  if (await cross.isVisible()) {
    await cross.click();
  }
  await page.getByRole('img', { name: 'minimize' }).click();
  await page.getByText('From', { exact: true }).click();
  await page.getByRole('textbox', { name: 'From', exact: true }).fill('hyderabad');
  await page.getByText('HYD', { exact: true }).click();
  await page.getByText('To', { exact: true }).click();
  await page.getByRole('textbox', { name: 'To', exact: true }).fill('bengaluru');
  await page.getByText('BLR', { exact: true }).click();
  await page.getByLabel(departureDate).click();
  await page.getByText('Return', { exact: true }).click();
  await page.getByLabel(returnDate).click();
  await page.getByText('Search').click();

});

function getAriaDate(offsetDays: number): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");
  return `${dayName} ${monthName} ${day}`;
}

