import { test, expect } from '@playwright/test';

test('Login Functionality', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('username');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});

test('Create Todo Item', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  await page.getByRole('textbox', { name: 'New Todo' }).fill('New Item');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('New Item')).toBeVisible();
});

test('Delete Todo Item', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const todoItem = page.getByText('New Item');
  await expect(todoItem).toBeVisible();
  await todoItem.locator('button', { hasText: 'Delete todo' }).click();
  await expect(page.getByText('New Item')).toHaveCount(0);
});