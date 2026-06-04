import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {
  page: Page
  readonly loginErrorMessage: Locator

  readonly userNameInput: Locator
  readonly userPasswordInput: Locator
  readonly loginButton: Locator
  
  constructor(page: Page) {
    this.page = page
    this.userNameInput = page.locator('#user-name');
    this.userPasswordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.loginErrorMessage = page.locator('[data-test="error"]');
  }

  public async goTo() {
    await this.page.goto("/")
  }

  public async login(userName: string, password: string) {
    await this.userNameInput.fill(userName);
    await this.userPasswordInput.fill(password);
    await this.loginButton.click()
  }

  public async expectErrorMessageIsDisplayed() {
    await expect(this.loginErrorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  }

}
