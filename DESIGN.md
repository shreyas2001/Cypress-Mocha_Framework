# DESIGN.md — Test Automation Framework Architecture (Cypress + Axios + Allure)

## 1. Purpose of the Framework
The goal of this framework is to demonstrate a scalable, production-ready UI + API automation setup suitable for enterprise or banking applications.  
The framework supports:
- UI testing using Cypress
- API testing using Axios and cy.request()
- Page Object Model (POM)
- Modular utilities
- Configurable test data
- Allure reporting integration
- Continuous Integration using GitHub Actions

This document explains the architecture, design decisions, folder structure, and how the framework scales.

------------------------------------------------------------
2. High-Level Architecture
------------------------------------------------------------

Application Under Test
     |
     |-- UI Tests (Cypress)
     |      |-- Cypress Test Runner
     |      |-- Page Objects (loginPage.js)
     |      |-- Data-driven tests (fixtures)
     |
     |-- API Tests (Axios + cy.request)
     |      |-- axiosApiCalls.js utility
     |      |-- GET/POST validations
     |
Utilities:
     |-- logUtility.js (logging)
     |-- commands.js (custom Cypress commands)
     |
Reporting:
     |-- Allure results and HTML report
     |
CI/CD:
     |-- GitHub Actions pipeline
     |-- Installs dependencies
     |-- Runs UI + API tests
     |-- Publishes Allure report, videos, screenshots

------------------------------------------------------------
3. Folder Structure
------------------------------------------------------------

CYPRESS-ASSESSMENTFRAMEWORK/
|
|-- cypress/
|     |-- e2e/
|     |     |-- ui/
|     |     |     |-- loginSuccess.cy.js
|     |     |     |-- loginFailure.cy.js
|     |     |
|     |     |-- api/
|     |           |-- getResponse.cy.js
|     |           |-- postResponse.cy.js
|     |
|     |-- fixtures/
|     |     |-- loginData.json
|     |
|     |-- pages/
|     |     |-- loginPage.js
|     |
|     |-- utils/
|     |     |-- axiosApiCalls.js
|     |     |-- logUtility.js
|     |
|     |-- support/
|           |-- commands.js
|           |-- e2e.js
|
|-- .github/workflows/ci.yml
|-- cypress.config.js
|-- package.json
|-- DESIGN.md
|-- RETROSPECTIVE.md

------------------------------------------------------------
4. Technology Choices (and Why)
------------------------------------------------------------

1. **Cypress**
   - Fast and stable UI automation.
   - Automatic waiting reduces flakiness.
   - Built-in video/screenshot capture.
   - Easy integration with Allure and CI.

2. **Axios for API Testing**
   - Cleaner request/response handling.
   - Flexible for GET/POST operations.
   - Promotes separation between UI and API layers.

3. **Page Object Model (POM)**
   - Encapsulates UI locators and functions.
   - Simplifies maintenance.
   - Reduces duplicate test code.

4. **Allure Reporting**
   - Professional HTML report.
   - Attaches screenshots and videos.
   - Helps debugging failures quickly.

5. **GitHub Actions**
   - Runs tests on every commit.
   - Publishes artifacts (reports, videos).
   - Simple YAML-based workflow.

------------------------------------------------------------
5. Handling Flaky Tests
------------------------------------------------------------

Flakiness is minimized using:
- Cypress automatic retries for assertions.
- Cypress built-in smart waiting for elements.
- Stable locators inside Page Objects.
- Network stabilization using cy.intercept (if required).
- Optional retry settings in cypress.config.js.

------------------------------------------------------------
6. Handling Sensitive Data
------------------------------------------------------------

Banking applications require secure data handling.  
This framework supports:
- Environment variables instead of hard-coded values.
- GitHub Secrets for CI pipelines.
- No credentials stored inside the repo.
- Ability to plug in secure vaults later (Azure Key Vault, Hashicorp Vault).

------------------------------------------------------------
7. Scalability and Future Growth
------------------------------------------------------------

This framework can scale easily with:
- Additional Page Object modules for new UI features.
- More API clients for service-level testing.
- Parallel execution using Cypress Dashboard.
- Tagged test runs (smoke, regression, integration).
- Schema validations using AJV or Joi.
- Centralized test data management.

------------------------------------------------------------
8. Summary
------------------------------------------------------------

This automation framework is:
- Modular
- Maintainable
- Extensible
- CI-ready
- Suitable for enterprise UI + API automation

Its architecture and design choices mirror real-world automation patterns used in fintech and banking QA teams.