import { test, expect } from '@playwright/test';

test("Login", async ({ page }) => {
  // 0. Navigate to target_url
  await page.goto("https://fake-todo-list.vercel.app/login");

  // 1. Click on INPUT
  await page.locator("input#mat-input-0").click();

  // 2. Click on INPUT
  await page.locator("input#mat-input-1").click();

  // 3. Click on SPAN
  await page.locator("html > body > app-root > main.main-container > app-login > div.centered-form-container > mat-card.mat-mdc-card.mdc-card.centered-card > mat-card-actions.mat-mdc-card-actions.mdc-card__actions.mat-mdc-card-actions-align-end > button.mdc-button.mat-mdc-button-base.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mdc-button__label > span").click();
});