import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';

test('inventory list', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto(process.env.BASE_URL!);
    await loginPage.login(process.env.SAUCEUSERNAME!, process.env.SAUCEPASSWORD!);
    await expect(inventoryPage.title).toBeVisible();
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
    await expect(inventoryPage.inventoryItemNames).toHaveText([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ]); 
    await expect(inventoryPage.addToCartButtons).toHaveCount(6);

  

});