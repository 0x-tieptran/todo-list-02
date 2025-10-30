import { test, expect } from '@playwright/test';

test('Test Case: Login', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');

  await page.locator('button#mat-button-toggle-0-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-2-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-2-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content').click();
  await page.locator('input#mat-input-0').click();
  await page.locator('html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > mat-list.mat-mdc-list.mat-mdc-list-base.mdc-list > app-todo-item > mat-list-item.mat-mdc-list-item.mdc-list-item.mat-mdc-list-item-single-line.mdc-list-item--with-one-line > span.mdc-list-item__content > span.mat-mdc-list-item-unscoped-content.mdc-list-item__primary-text > div.list-item-content > button.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed.cdk-focused.cdk-mouse-focused > mat-icon.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').click();
  await page.locator('html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > mat-list.mat-mdc-list.mat-mdc-list-base.mdc-list > app-todo-item > mat-list-item.mat-mdc-list-item.mdc-list-item.mat-mdc-list-item-single-line.mdc-list-item--with-one-line > span.mdc-list-item__content > span.mat-mdc-list-item-unscoped-content.mdc-list-item__primary-text > div.list-item-content > button.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed.cdk-focused.cdk-mouse-focused > mat-icon.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').click();
  await page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content').click();
  await page.locator('html > body > app-root > main.main-container > app-todo-list').click();
  await page.locator('button#mat-button-toggle-2-button > span.mat-button-toggle-label-content').click();
  await page.locator('button#mat-button-toggle-0-button > span.mat-button-toggle-label-content').click();

  await expect(page.locator('button#mat-button-toggle-0-button > span.mat-button-toggle-label-content')).toBeVisible();
  await expect(page.locator('button#mat-button-toggle-2-button > span.mat-button-toggle-label-content')).toBeVisible();
  await expect(page.locator('button#mat-button-toggle-1-button > span.mat-button-toggle-label-content')).toBeVisible();
  await expect(page.locator('input#mat-input-0')).toBeVisible();
  await expect(page.locator('html > body > app-root > main.main-container > app-todo-list')).toContainText('My To-Do List\nNew Todo\nadd\nAdd\nAll\nActive\nCompleted\nLearn Angular basics\nedit\ndelete');
});
