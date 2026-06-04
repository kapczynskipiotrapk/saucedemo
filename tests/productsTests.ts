import { test, expect } from '../fixtures';


test('product sort', async ({ productsPage, loginPage, page, browser }) => {
  await loginPage.goTo()
  await loginPage.login("standard_user", "secret_sauce")
  await productsPage.sort()
  await expect(productsPage.firstProductName)
    .toHaveText('Sauce Labs Fleece Jacket');
}) 
