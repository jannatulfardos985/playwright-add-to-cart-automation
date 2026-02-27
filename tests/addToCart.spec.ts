import { test, expect } from '@playwright/test';

test('Add products to cart', async ({ page }) => {

  await page.goto('http://automationexercise.com');

  await page.click('a[href="/products"]');

  const first = page.locator('.product-image-wrapper').first();
  await first.hover();
  await first.locator('.add-to-cart').first().click();

  await page.click('text=Continue Shopping');

  const second = page.locator('.product-image-wrapper').nth(1);
  await second.hover();
  await second.locator('.add-to-cart').first().click();

  await page.click('text=View Cart');

  const items = page.locator('.cart_info tbody tr');
  await expect(items).toHaveCount(2);
});