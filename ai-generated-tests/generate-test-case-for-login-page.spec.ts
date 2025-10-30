import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');

  const usernameField = page.getByPlaceholder('Username');
  await expect(usernameField).toBeVisible();

  await usernameField.fill('testuser');
  await expect(usernameField).toHaveValue('testuser');
});