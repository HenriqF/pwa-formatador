import { test, expect } from '@playwright/test';

test('pagina abriu', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveTitle(/Formatador/);
});
