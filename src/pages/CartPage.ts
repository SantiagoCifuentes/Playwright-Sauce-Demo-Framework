import { Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly cartItemNames: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.cartItemNames = page.locator('.inventory_item_name');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }



}