import { test, expect } from "@playwright/test";

test("yatra", { tag: ["@smoke"] }, async ({ page }) => {
  const departureDate = getAriaDate(1);
  const returnDate = getAriaDate(7);
  await page.goto("https://www.yatra.com/");
  const cross = page.getByAltText('cross').first();
  await cross.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
  if (await cross.isVisible()) {
    await cross.click();
  }
  await page.getByText('new delhi', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Departure From' }).fill('Banglore');
  await page.getByText('Bangalore').first().click();
  await page.getByText('mumbai', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Going To' }).fill('mumbai');
  await page.getByText('Mumbai').nth(1).click();
  await page.getByRole('button', { name: 'Departure Date inputbox' }).click();
  await page.getByRole('option', { name: departureDate }).click();
  await page.getByRole('button', { name: 'Return Date inputbox' }).click();
  await page.getByRole('option', { name: returnDate }).click();
  await page.pause();
  //await page.getByRole('button', { name: 'Search', exact: true }).click();

});

function getAriaDate(daysFromToday: number) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const day = d.getDate();
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
    day % 10 === 2 && day !== 12 ? "nd" :
    day % 10 === 3 && day !== 13 ? "rd" : "th";

  return `Choose ${weekday}, ${month} ${day}${suffix},`;
}

