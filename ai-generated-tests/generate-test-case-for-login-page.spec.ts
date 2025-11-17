import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');

  const emailInput = page.locator("input[name='email']");
  const passwordInput = page.locator("input[name='password']");
  const submitButton = page.locator("button[type='submit']");

  await emailInput.fill('test@example.com');
  await passwordInput.fill('password123');
  await submitButton.click();

  await expect(page).toHaveURL('https://fake-todo-list.vercel.app/dashboard');
});