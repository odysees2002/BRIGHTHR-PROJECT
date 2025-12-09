// Represents the Home page and provides methods to navigate to a URL and click the “Log in” button.
//Type : Link ;  Name : Log in
// Class Name :  HomePage ; Function Name: Click_Login

import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginButton = page.getByRole("link", { name: "Log in" });
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}
