export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.emailField = this.page.getByRole("textbox", { name: "Email" });

    this.emailFieldError = this.page.getByText("Enter an email");
    this.lastnameFieldError = this.page.getByText("Enter a last name");
  }
}
