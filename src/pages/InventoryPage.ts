import { Locator, Page } from '@playwright/test';

export class InventoryPage {
	readonly page: Page;
	readonly title: Locator;
	readonly inventoryItems: Locator;
	readonly inventoryItemNames: Locator;
	readonly addToCartButtons: Locator;

	constructor(page: Page) {
		this.page = page;
		this.title = page.locator('[data-test="title"]')
		this.inventoryItems = page.locator('.inventory_item');
		this.inventoryItemNames = page.locator('.inventory_item_name');
		this.addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
	}


	async addItemToCart(itemName: string) {
		await this.page.locator('[data-test="item-4-title-link"]').click();
		await this.page.getByRole('button', { name: 'Add to cart' }).click();

	}

	async navigateToCart() {
		await this.page.locator('[data-test="shopping-cart-link"]').click();
	}

}