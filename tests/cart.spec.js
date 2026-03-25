//tests
//able to delete item from cart -> able to delete same item from cart
// can't add sold out item -> go back to catalog and click on first sold out item, cannot add
//Cannot checkout with empty fields -> error messages are shown

import { expect, test } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";

test.describe("Cart Tests", () => {
  test("adds item to cart and displays it in cart", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.addItemToCart();
    await homePage.goto();

    await homePage.clickMyCart();

    await expect(homePage.removeButton).toBeVisible();
  });
});
