import { expect, test } from "@playwright/test";
import { HomePage } from "../page_objects/HomePage";
import { CheckoutPage } from "../page_objects/CheckoutPage";

test.describe("Cart Tests", () => {
  test("adds item to cart and displays it in cart", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.addItemToCart();
    await homePage.clickLogo();

    await homePage.clickMyCart();

    await expect(homePage.removeButton).toBeVisible();
    await expect(homePage.checkOutLink).toBeVisible();
  });

  test("add item to cart and delete item in cart", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.addItemToCart();
    await homePage.goto();
    await homePage.clickMyCart();
    await homePage.removeItemFromCart();

    await expect(homePage.emptyCartMessage).toBeVisible();
    await homePage.clickCheckout();
    await expect(homePage.secondEmptyCartMessage).toBeVisible();
  });

  test("Cannot checkout items with empty fields", async ({ page }) => {
    const homePage = new HomePage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.goto();
    await homePage.addItemToCart();
    await homePage.goto();
    await homePage.clickMyCart();
    await homePage.clickCheckout();
    await homePage.clickPaynow();

    await expect(checkoutPage.emailFieldError).toBeVisible();
    await expect(checkoutPage.lastnameFieldError).toBeVisible();
    await expect(page).toHaveURL(/checkouts/);
  });
});
