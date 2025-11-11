import { test, expect } from '@playwright/test';

test('pagina abriu', async ({ page }) => {
  await page.goto('https://henriqf.github.io/pwa-formatador/');
  await expect(page).toHaveTitle(/Document/);
});

