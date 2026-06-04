import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from './pom/loginpage';
import { ProductsPage } from './pom/productspage';

export const test = base.extend<any>({
  loginPage: async ({ page }: { page: Page }, use: (value: LoginPage) => Promise<void>) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }: { page: Page }, use: (value: ProductsPage) => Promise<void>) => {
    await use(new ProductsPage(page));
  },
});

export { expect };