import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  globalTimeout: 60 * 60 * 1000,
  timeout: 5 * 60 * 1000,
  expect: {
    timeout: 5 * 60 * 1000
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["line"],['html']],
  use: {
    trace: 'on-first-retry',
    video:'off',
    screenshot:'off',
    headless: true,
    actionTimeout: 5 * 60 * 1000
  },
  projects: [
    {
      name: 'setup',
      testMatch: /global\.setup\.ts/,
      teardown: 'cleanup',
    },
    {
      name: 'cleanup',
      testMatch: /global\.teardown\.ts/,
    },
    {
      name: 'Playwright Testing',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },
  ],
});
