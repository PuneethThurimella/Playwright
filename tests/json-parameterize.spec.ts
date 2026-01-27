import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';

type TestData = {
  test_case: string;
  some_value: string;
  some_other_value: string;
}
const records: TestData[] = JSON.parse(fs.readFileSync(path.join('resources', 'input.json'),"utf8"));

for (const record of records) {
  test(`Test: ${record.test_case}`, async ({ page }) => {
    console.log(record.test_case, record.some_value, record.some_other_value);
  });
}


