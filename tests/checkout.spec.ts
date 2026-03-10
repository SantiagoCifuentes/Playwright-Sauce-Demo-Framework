import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';
import 'dotenv/config';



test('checkout ', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

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
