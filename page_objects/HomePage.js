export class HomePage {
  constructor(page) {
    this.page = page;

    this.loginButton = this.page.getByRole("link", { name: "Log In" });
    this.logoutButton = this.page.getByRole("link", { name: "Log Out" });
    this.myAccountButtom = this.page.getByRole("link", { name: "My Account" });
    this.cartButton = this.page.getByRole("link", { name: "My Cart" });
    this.greyJacketItem = this.page.getByRole("heading", {
      name: "Grey Jacket",
    });

    this.addToCartButton = this.page.getByRole("button", {
      name: "Add To Cart",
    });
    this.removeButton = this.page.getByRole("link", { name: "Remove" });
    this.checkOutButton = this.page.getByRole("Button", { name: "Check Out" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async addItemToCart() {
    await this.greyJacketItem.click();
    await this.addToCartButton.click();
  }

  async clickMyCart() {
    await this.cartButton.click();
  }

  async gotoLogin() {
    await this.loginButton.click();
  }
}
