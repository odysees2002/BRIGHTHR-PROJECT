// Provides a method to click the "Add employee" button on the Employee Hub page, with error handling.
//Type : button ;  Name : Add employee
// Class Name :  EmployeeHub ; Function Name: Click_AddEmp

import { Locator, Page } from "playwright-core";
import { EmpData } from "../utilities/readEmployeeData";

export class EmployeeHubPage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailAddressInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly jobTitleInput: Locator;
  readonly saveNewEmployeeButton: Locator;
  
  readonly addAnotherEmployeeButton: Locator;
  readonly closeModalButton: Locator;
  readonly newEmployeeAddedText: Locator;

  constructor (page: Page) {
    this.page = page;    
    
    this.addEmployeeButton = page.getByRole("button", { name: "Add employee" });

    this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
    this.emailAddressInput = page.getByRole('textbox', { name: 'Email address' });
    this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone number (optional)' });
    this.jobTitleInput = page.getByRole('textbox', { name: 'Job title' });
    this.saveNewEmployeeButton = page.getByRole('button', {name : 'Save new employee'});

    this.addAnotherEmployeeButton = page.getByRole('button', { name: 'Add another employee' });
    this.closeModalButton = page.getByRole('button', { name: 'Close modal' });
    this.newEmployeeAddedText = page.locator('text=Success! New employee added');
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async clickAddAnotherEmployee() {
    await this.addAnotherEmployeeButton.click();
  }

  async closeAddEmployee() {
    await this.closeModalButton.click();
  }

  async addEmployee(employeeDetails: EmpData) {
    // get today's date
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear().toString();

    // fill in details
    await this.firstNameInput.click();
    await this.firstNameInput.fill(employeeDetails.First_Name);
    await this.lastNameInput.click();
    await this.lastNameInput.fill(employeeDetails.Last_name);
    await this.emailAddressInput.click();
    await this.emailAddressInput.fill(employeeDetails.Email_Address);
    await this.phoneNumberInput.click();
    await this.phoneNumberInput.fill(employeeDetails.Phone_Number);
    await this.jobTitleInput.click();
    await this.jobTitleInput.fill(employeeDetails.Job_Title); 
    
    // set start date
    await this.page.locator('#startDate [data-testid="input-selector"]').click();
    await this.page.getByRole('button', { name: currentYear }).click();
    await this.page.getByRole('button', { name: employeeDetails.Start_Year }).click();
    await this.page.getByRole('button', { name: currentMonth }).click();
    await this.page.getByRole('button', { name: employeeDetails.Start_Month }).click();
    await this.page.getByText(employeeDetails.Start_Date , { exact: true }).click();

    // save
    await this.saveNewEmployeeButton.click();
    await this.newEmployeeAddedText.waitFor({ state: 'visible' });
  }

  async containsEmployee(employeeDetails: EmpData): Promise<boolean> {
    const employeeLocator = this.page.locator('div', {
      hasText: `${employeeDetails.First_Name} ${employeeDetails.Last_name}`,
      has: this.page.locator('div', { hasText: employeeDetails.Job_Title })
    });
    
    return await employeeLocator.count() > 0;
  }
}
