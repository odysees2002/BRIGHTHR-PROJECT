# BrightHR Playwright Automation
This repository contains end-to-end automated tests for the BrightHR Task web application, built using Playwright.

## Project Structure
    BRIGHTHRPROJECT/
    ├── playwright.config.ts
    ├── package.json
    ├── tests/
    │   └── brighthr.spec.ts
    ├── pages/
    │   ├── dashboardPage.ts
    │   ├── employeeHubPage.ts
    │   ├── homePage.ts
    │   ├── loginPage.ts
    ├── testdata/
    │   └── EmployeeDetails.csv
    ├── utilities/
    │   ├── readEmployeeData.ts
    └── .github/workflows/
        └── ci.yml


## Project Setup

1. **Install Project Dependencies**:
   ```
   npm install
   ```

2. **Install Playwright**:
   ```
   npx playwright install --with-deps
   ```
## Local Setup

 1. **Clone the repository**:
   ```
  https://github.com/odysees2002/bright_hr_task.git
  cd BrightHRProject

   ```

2. **Install dependencies**:
   ```
   npm install

   ```
3. **Install Playwright browsers**:
   ```
   npx playwright install --with-deps

   ```

## Running Tests

1. **Run Tests**:
   ```
   npx playwright test
   ```

2. **Debug Tests**:
   ```
   PWDEBUG=1 npx playwright test
   ```

3. **View Test Report**:
   ```
   npx playwright show-report
   ```
