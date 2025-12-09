//Test Script1

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from "../pages/dashboardPage";
import { EmployeeHubPage } from "../pages/employeeHubPage";
import { siteUrl, username, password } from "../config.json";
import { EmpData, ReadEmpData } from "../utilities/readEmployeeData";
import path from "path";

test("user can add employees", async ({ page }) => {
  const csvPath = path.resolve(__dirname, "../testdata/EmployeeDetails.csv");
  const employees: EmpData[] = ReadEmpData(csvPath);

  const home = new HomePage(page);
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const employeeHub = new EmployeeHubPage(page);

  // login
  await home.navigate(siteUrl);
  await home.clickLogin();
  await login.login(username, password);

  // go to employee hub
  await dashboard.waitForLoaded();
  await dashboard.goToEmployees();

  // add employees
  await employeeHub.clickAddEmployee();
  
  // Fills in employee details and clicks another employee while i < employee length, in this case 2
  for (let i = 0; i < employees.length; i++) {
    await employeeHub.addEmployee(employees[i]);
    await employeeHub.clickAddAnotherEmployee();
  }
  
  // closes the add employee
  await employeeHub.closeAddEmployee();

  // verify employees added
  for (let i = 0; i < employees.length; i++) {
    const employeeExists = await employeeHub.containsEmployee(employees[i]);
    expect(employeeExists).toBeTruthy();
  }
});

test.afterEach(async ({ context }) => {
  await context.close();
});
