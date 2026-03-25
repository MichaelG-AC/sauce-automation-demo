export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailField = this.page.getByRole("textbox", { name: "Email Address" });
    this.passwordField = this.page.getByRole("textbox", { name: "Password" });
    this.signinButton = this.page.getByRole("button", { name: "Sign In" });

    this.error_message = this.page.getByText("Incorrect email or password.");
  }

  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signinButton.click();
  }
}
