import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/loginpage';


let loginPage : LoginPage


test.beforeEach(async ({page}) => {
  console.log('Before tests');
  loginPage = new LoginPage(page);

});

test('login test', async ({ page, browser }) => {
    await loginPage.goTo()
}) 