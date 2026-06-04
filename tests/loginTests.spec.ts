import { test, expect } from '../fixtures';


test('login test', async ({ productsPage, loginPage, page, browser }) => {
    await loginPage.goTo()
    await loginPage.login("standard_user", "secret_sauce")
    await productsPage.expectProductsPageLoaded()
}) 

test('locked user', async ({productsPage, loginPage, page, browser }) => {
    await loginPage.goTo()
    await loginPage.login("locked_out_user", "secret_sauce")
    await loginPage.expectErrorMessageIsDisplayed() 
}) 

test('session persists after reload', async ({ page, loginPage, productsPage }) => {
  await loginPage.goTo();
  await loginPage.login("standard_user", "secret_sauce");
  await productsPage.expectProductsPageLoaded();

console.log(await page.title()); 
const url = page.url();
console.log(url); 

  await productsPage.expectProductsPageLoaded();
});