// Represents the Login page and provides methods to fill in credentials and perform the login action.
//Type : Textbox ;  Name : 'Email address' , 'Password visibility'
//Type : Button ; Name : 'Login'
// Class Name :  LoginPage ; Function Name: LoginPage_ClickLogin

import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.getByTestId("login-button");
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.submit();
  }
}
