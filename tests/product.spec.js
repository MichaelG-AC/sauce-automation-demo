//tests

import { expect, test } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";
import { ProductPage } from "../page_objects/ProductPage";

test.describe("Product Tests", () => {
  test("click on item and able to view dedicated page", async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.goto();
    await productPage.clickOnItem();

    await expect(productPage.addToCartButton).toBeVisible();
    await expect(page).toHaveURL(
      /\/collections\/frontpage\/products\/grey-jacket\//,
    );
  });

  test("able to observe the full lists of products", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.clickOnCatalog();

    await expect(page).toHaveURL(/\/collections\/all/);
  });
});
