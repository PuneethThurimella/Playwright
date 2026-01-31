import { test as teardown } from '@playwright/test';

teardown('delete setup', async ({ }) => {
  console.log('deleting setup...');
});