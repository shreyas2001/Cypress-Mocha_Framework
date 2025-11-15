CYPRESS AUTOMATION FRAMEWORK - UI + API + ALLURE + CI

This project demonstrates a scalable automation framework capable of:

- UI testing using Cypress
- API testing using Axios
- Page Object Model
- Logging utilities
- Allure reporting
- GitHub Actions CI pipeline
- Data-driven testing
- Modular reusable utilities


------------------------------------------------------------
1. PROJECT STRUCTURE
------------------------------------------------------------

CYPRESS-ASSESSMENTFRAMEWORK/
|
|-- cypress/
|    |-- e2e/
|    |    |-- ui/
|    |    |    |-- loginSuccess.cy.js
|    |    |    |-- loginFailure.cy.js
|    |    |
|    |    |-- api/
|    |         |-- getResponse.cy.js
|    |         |-- postResponse.cy.js
|    |
|    |-- fixtures/
|    |     |-- loginData.json
|    |
|    |-- pages/
|    |     |-- loginPage.js
|    |
|    |-- utils/
|    |     |-- axiosApiCalls.js
|    |     |-- logUtility.js
|    |
|    |-- support/
|    |     |-- commands.js
|    |     |-- e2e.js
|    |
|    |-- screenshots/   (auto generated)
|    |-- videos/        (auto generated)
|
|-- .github/workflows/ci.yml
|-- cypress.config.js
|-- package.json
|-- .gitignore
|-- DESIGN.md
|-- RETROSPECTIVE.md


------------------------------------------------------------
2. INSTALLATION STEPS (LOCAL)
------------------------------------------------------------

Install dependencies:
npm install

Verify Node.js version:
node -v   (use Node 18 or Node 20)


------------------------------------------------------------
3. RUNNING TESTS
------------------------------------------------------------

Run all tests:
npx cypress run --env allure=true

Run only UI tests:
npx cypress run --spec "cypress/e2e/ui/*.cy.js"

Run only API tests:
npx cypress run --spec "cypress/e2e/api/*.cy.js"

Open Cypress UI mode:
npx cypress open


------------------------------------------------------------
4. ALLURE REPORT (LOCAL)
------------------------------------------------------------

Step 1 - Run tests (this generates allure-results folder)

Step 2 - Generate HTML report:
npx allure-commandline generate allure-results --clean -o allure-report

Step 3 - Open report:
npx allure open

IMPORTANT:
Do NOT double-click index.html
Always use: npx allure open


------------------------------------------------------------
5. TEST COVERAGE
------------------------------------------------------------

UI Tests:
- loginSuccess.cy.js (valid login)
- loginFailure.cy.js (invalid login)

API Tests:
- getResponse.cy.js (GET request validation)
- postResponse.cy.js (POST request validation)


------------------------------------------------------------
6. DATA-DRIVEN TESTING
------------------------------------------------------------

Fixtures located in:
cypress/fixtures/loginData.json

Contains valid and invalid credentials used in tests.


------------------------------------------------------------
7. UTILITIES
------------------------------------------------------------

Axios API Client:
cypress/utils/axiosApiCalls.js

Logger Utility:
cypress/utils/logUtility.js

Custom Command:
cy.login(username, password)


------------------------------------------------------------
8. GITHUB ACTIONS CI PIPELINE
------------------------------------------------------------

Pipeline steps:
- Install dependencies
- Run Cypress tests
- Generate Allure report
- Upload artifacts:
    - Allure-report
    - Cypress videos
    - Cypress screenshots

Artifacts can be downloaded from GitHub Actions workflow run.

CI File Location:
.github/workflows/ci.yml


------------------------------------------------------------
9. TROUBLESHOOTING
------------------------------------------------------------

Allure shows "Loading...":
Use "npx allure open" instead of clicking index.html.

Screenshots not uploaded:
Screenshots only generate when tests fail unless explicitly added.


------------------------------------------------------------
10. SUMMARY
------------------------------------------------------------

This framework provides:
- UI + API automation
- Page Object Model
- Data-driven tests
- Logging utilities
- Allure reporting
- GitHub CI integration
- Scalable and modular architecture

This project meets all assessment requirements.
