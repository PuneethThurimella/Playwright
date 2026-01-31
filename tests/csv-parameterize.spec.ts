import * as fs from 'fs';
import * as path from 'path';
import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';

type TestData = {
  test_case: string;
  some_value: string;
  some_other_value: string;
}

const records: TestData[] = parse(fs.readFileSync(path.join('resources', 'input.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(`Test: ${record.test_case}`, { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    console.log(record.test_case, record.some_value, record.some_other_value);
  });
}


