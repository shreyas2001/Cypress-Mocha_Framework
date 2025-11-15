# DESIGN — Automation Framework (Cypress + Axios + Allure)

## Purpose & Goals
This framework demonstrates a production-like automation solution for UI + API tests:
- UI automation using Cypress (Page Object pattern).
- API automation using Axios and Cypress `cy.request()` when convenient.
- Reporting via Allure (HTML report with attachments).
- CI integration with GitHub Actions: install → run tests → generate Allure → upload artifacts.
Target use-case: a demo banking-style validation (login flows + API checks) for assessment.

---

## High-level architecture
CYPRESS-ASSESSMENTFRAMEWORK/
│
├── cypress/
│ ├── e2e/
│ │ ├── ui/
│ │ │ ├── loginSuccess.cy.js
│ │ │ └── loginFailure.cy.js
│ │ ├── api/
│ │ │ ├── getResponse.cy.js
│ │ │ └── postResponse.cy.js
│ ├── fixtures/
│ │ └── loginData.json
│ ├── pages/
│ │ └── loginPage.js
│ ├── utils/
│ │ ├── axiosApiCalls.js
│ │ └── logUtility.js
│ ├── support/
│ │ ├── commands.js
│ │ └── e2e.js
│ ├── screenshots/ ← auto-generated
│ └── videos/ ← auto-generated
│
├── .github/workflows/ci.yml ← CI pipeline
├── cypress.config.js
├── package.json
├── .gitignore
├── DESIGN.md ← Architecture document
└── RETROSPECTIVE.md ← Retrospective document

