// @ts-check
import { test, expect } from '@playwright/test';

test('test 5', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("test 5 starts")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("test 5 ends")
});

test('test 6', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("test 6 starts")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("test 6 ends")
});