import { test, expect } from '../src/fixtures/TestFixture';
import 'dotenv/config';

test('inventory list', async ({ page, loginPage, inventoryPage }) => {

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