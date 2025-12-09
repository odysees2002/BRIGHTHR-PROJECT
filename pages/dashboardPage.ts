// // Represents the dashboard page and provides methods to load it and navigate to the Employees tab.
//Type : Link , Name : Employees
// Class Name :  DashBoard ; Function Name: Click_EmpLink

import { Page, Locator } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly employeesTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeesTab = page.locator('[data-e2e="employees"]');
  }

  async waitForLoaded() {
    await this.employeesTab.waitFor();
  }

  async goToEmployees() {
    await this.employeesTab.click();
  }
}
