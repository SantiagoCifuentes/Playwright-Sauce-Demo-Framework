import { test, expect } from '../src/fixtures/TestFixture';
import 'dotenv/config';



test('verify cart item', async ({ page, loginPage, inventoryPage, cartPage }) => {

    await page.goto(process.env.BASE_URL!);
    await loginPage.login(process.env.SAUCEUSERNAME!, process.env.SAUCEPASSWORD!);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.navigateToCart();
    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.cartItemNames).toHaveText(['Sauce Labs Backpack']);





});
