export class HomePage {
  constructor(page) {
    this.page = page;

    this.logoButton = this.page.getByAltText("Sauce Demo");
    this.loginButton = this.page.getByRole("link", { name: "Log In" });
    this.logoutButton = this.page.getByRole("link", { name: "Log Out" });
    this.catalogButton = this.page.getByRole("link", { name: "Catalog" });
    this.myAccountButtom = this.page.getByRole("link", { name: "My Account" });
    this.cartButton = this.page.getByRole("link", { name: "My Cart" });
    this.greyJacketItem = this.page.getByRole("heading", {
      name: "Grey Jacket",
    });

    this.addToCartButton = this.page.getByRole("button", {
      name: "Add To Cart",
    });
    this.removeButton = this.page.getByRole("link", { name: "Remove" });
    this.checkOutLink = this.page.getByRole("link", { name: "Check Out" });
    this.emptyCartMessage = this.page.getByText("Your cart is empty.");
    this.secondEmptyCartMessage = this.page.getByText(
      "It appears that your cart is currently empty!",
    );

    this.checkoutButton = this.page.getByRole("button", { name: "Check Out" });
    this.payNowButton = this.page.getByRole("button", { name: "Pay now" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickLogo() {
    await this.logoButton.click();
  }

  async clickOnCatalog() {
    await this.catalogButton.click();
  }

  async addItemToCart() {
    await this.greyJacketItem.click();
    await this.addToCartButton.click();
    await this.page.waitForTimeout(2000);
  }

  async removeItemFromCart() {
    await this.removeButton.click();
  }

  async clickMyCart() {
    await this.cartButton.click();
  }

  async clickCheckout() {
    await this.checkOutLink.click();
  }

  async clickPaynow() {
    await this.checkoutButton.click();
    await this.payNowButton.click();
  }

  async gotoLogin() {
    await this.loginButton.click();
  }
}
