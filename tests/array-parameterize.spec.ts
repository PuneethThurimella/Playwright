import test, { expect } from "@playwright/test";

const members = [
  { name: "Puneeth", expected: "Puneeth" },
  { name: "Kumar", expected: "Kumar" },
  { name: "Raj", expected: "Raj" },
];

members.forEach(({ name, expected }) => {
  test(`testing with ${name}`, { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    await page.goto(`https://httpbin.org/get?name=${name}`);
    await expect(page.locator("body")).toContainText(expected);
  });
});
