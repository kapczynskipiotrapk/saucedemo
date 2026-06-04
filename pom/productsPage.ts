import { Locator, Page, expect } from '@playwright/test';

export class ProductsPage {
  page: Page


  constructor(page: Page) {
    this.page = page
  }

  private get products() {
    return this.page.locator('.inventory_item');
  }

  firstProductName() {
    return this.page.locator('[data-test="inventory-item-name"]').first();
  }

  public async sort() {
    await this.page.selectOption('[data-test="product-sort-container"]', 'Price (high to low)');
  }

  public async expectProductsPageLoaded() {
    await expect(this.page).toHaveURL("/inventory.html");
    await expect(this.products).toHaveCount(6);
  }

}

