import test, { expect } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
// import records from '../resources/input.json'; 

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

type TestData = {
  id: string;
  firstName: string;
  lastName: string;
}

const csvRecords: TestData[] = parse(fs.readFileSync(path.join('resources', 'input.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of csvRecords) {
  test(`CSV Test: ${record.firstName}`, { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    console.log(record.id, record.firstName, record.lastName);
  });
}


const jsonRecords: TestData[] = JSON.parse(fs.readFileSync(path.join('resources', 'input.json'),"utf8"));

for (const record of jsonRecords) {
  test(`JSON Test: ${record.firstName}`, async ({ page }) => {
    console.log(record.id, record.firstName, record.lastName);
  });
}
