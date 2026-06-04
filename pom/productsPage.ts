import { Locator, Page, expect } from '@playwright/test';

export class ProductsPage {


  constructor(private page: Page) {
  }

  private get products() {
    return this.page.locator('.inventory_item');
    
  }

  public async expectProductsPageLoaded() {
      await expect(this.page).toHaveURL("/inventory.html");
    await expect(this.products).toHaveCount(6);
  }

}