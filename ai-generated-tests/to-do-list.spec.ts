import { test, expect } from '@playwright/test';

test('Test Case: To do list', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');

  await page.locator('button#mat-button-toggle-0-button > span.mat-button-toggle-label-content').click();
  await page.locator('input#mat-input-0').click();
  await page.locator('input#mat-input-0').fill('Test');
  await page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content').click();
  await page.locator('html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > mat-icon.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').click();

  await expect(page.locator('input#mat-input-0')).toHaveValue('Test');
});