import { test, expect } from '../src/fixtures/TestFixture';
import 'dotenv/config';



test('checkout @regression checkout flow ', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {

    await page.goto(process.env.BASE_URL!);
    await loginPage.login(process.env.SAUCEUSERNAME!, process.env.SAUCEPASSWORD!);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.navigateToCart();
    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.cartItemNames).toHaveText(['Sauce Labs Backpack']);
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
    await expect(checkoutPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');





});
