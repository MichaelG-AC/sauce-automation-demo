export class ProductPage {
  constructor(page) {
    this.page = page;

    this.greyJacketItem = this.page.getByRole("heading", {
      name: "Grey Jacket",
    });
    this.addToCartButton = this.page.getByRole("button", {
      name: "Add To Cart",
    });
  }

  async clickOnItem() {
    await this.greyJacketItem.click();
  }
}
