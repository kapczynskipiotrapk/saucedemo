import {  expect, Page } from "@playwright/test";
import * as yt_selectors from '../selectors/ytSelectors';
import { podupiajNaElementy } from "../helper/helper";

export class Yt {

  page: Page

  constructor(page: Page) {
    this.page = page
  }


  public async acceptCookies(): Promise<void> {
    await this.page.click(yt_selectors.cookie_accept);
  }

  public async openJutube(): Promise<void> {
    await this.page.goto('https://youtube.com/');
  }

    public async goToShortsTab(): Promise<void> {
    await this.page.click(yt_selectors.shorts_subpage);
  }


  public async verifyPageTitle(): Promise<void> {
    var title = "YouTube"
    await expect(this.page).toHaveTitle(title);
  }


  public async search(value: string): Promise<void> {
    await this.page.locator(yt_selectors.search_bar).waitFor({
      state: "visible",
      timeout: 10000

    })
    await this.page.click(yt_selectors.search_bar, { timeout: 9000 })
    await this.page.fill(yt_selectors.search_bar, value, { timeout: 9000 })
    await this.page.keyboard.press("Enter")
  }


  public async searchResultContainsShorts(): Promise<void> {
    await podupiajNaElementy(this.page, "//div[@class='ytGridShelfViewModelGridShelfItem']")

    const shortItems = this.page.locator("//div[@class='ytGridShelfViewModelGridShelfItem']")
    const quantity = await shortItems.count()

    for (let i = 0; i < quantity; i++) {
      const element = shortItems.nth(i);
      console.log(i.toString() + "interejszyn");
      await expect(element).toBeVisible();
    }
    console.log("actual quantity " + quantity.toString())
    expect(quantity).toBeGreaterThanOrEqual(5)


  }
}
