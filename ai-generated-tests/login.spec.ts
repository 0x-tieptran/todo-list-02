import { test, expect } from '@playwright/test';

test('Test Case: Login', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');

  await page.locator('button#mat-button-toggle-0-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-2-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content').click();

  await expect(page.locator('button#mat-button-toggle-0-button > span.mat-button-toggle-label-content')).toBeVisible();
  await expect(page.locator('button#mat-button-toggle-2-button > span.mat-button-toggle-label-content')).toBeVisible();
  await expect(page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content')).toBeVisible();
});
