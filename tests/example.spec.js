// @ts-check
import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("test 1 starts")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("test 1 ends")
});

test('test 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("test 2 starts")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("test 2 ends")
});