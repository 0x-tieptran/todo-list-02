import { test, expect } from '@playwright/test';

test('Test Case: Login', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');

  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Active' }).click();

  await expect(page.getByRole('button', { name: 'All', pressed: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Completed', pressed: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Active', pressed: true })).toHaveAttribute('aria-pressed', 'true');
});