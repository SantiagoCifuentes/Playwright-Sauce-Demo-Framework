import { Locator, Page } from '@playwright/test';

export class InventoryPage {
	readonly page: Page;
	readonly title: Locator;
	readonly inventoryItems: Locator;
	readonly inventoryItemNames: Locator;
	readonly addToCartButtons: Locator;

	constructor(page: Page) {
		this.page = page;
		this.title = page.getByRole('heading', { name: 'Products' });
		this.inventoryItems = page.locator('.inventory_item');
		this.inventoryItemNames = page.locator('.inventory_item_name');
		this.addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
	}






}
