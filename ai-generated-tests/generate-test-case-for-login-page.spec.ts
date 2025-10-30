import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');
  const emailInput = page.locator("input[name='email']");
  await expect(emailInput).toBeVisible();
  await emailInput.fill('test@example.com');
  await expect(emailInput).toHaveValue('test@example.com');
});