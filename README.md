# E-commerce Automation in Cypress

## 1. Project overview

This repository contains **end-to-end (E2E) and API automation tests** for an e-commerce site and supporting sandbox scenarios. Tests are written in **Cypress** with a **Page Object Model (POM)** and run against:

- **Main app:** `https://tapsshop.pl/` (baseUrl in config)
- **Sandbox / demo sites:** e.g. Fabryka Testów, JSONPlaceholder API, Rediff register (alerts)

Reporting is done with **cypress-mochawesome-reporter**; CI is set up with **CircleCI** using the Cypress orb.

---

## 2. Main functions and test scope

### 2.1 E-commerce flows (tapsshop.pl)


| Area      | Test file                    | What it covers                                                            |
| --------- | ---------------------------- | ------------------------------------------------------------------------- |
| **Login** | `TS1-e-commerce-login.cy.js` | Valid login, invalid credentials (with Faker), My Account verification    |
| **Cart**  | `TS2-e-commerce-cart.cy.js`  | Add product to cart (from fixtures), verify in cart, remove, verify empty |
| **Order** | `TS3-e-commerce-order.cy.js` | Add to cart → checkout → fill billing → place order → verify success      |


### 2.2 Sandbox / training scenarios


| Area              | Test file                                  | What it covers                                                |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------- |
| **Basic UI**      | `TS4-sandbox-basic.cy.js`                  | Visit Fabryka Testów, menu navigation, scroll, screenshot     |
| **REST API**      | `TS5-sandbox-rest-api.cy.js`               | JSONPlaceholder: GET/POST/PUT/DELETE posts                    |
| **UI controls**   | `TS6-sandbox-basic-ui-controls.cy.js`      | Basic form/control interactions                               |
| **Alerts**        | `TS7-sandbox-alerts.cy.js`                 | JavaScript alert handling (Rediff register)                   |
| **Iframe**        | `TS8-sandbox-iframe.cy.js`                 | Iframe interaction                                            |
| **Cookies**       | `TS9-sanbox-cookies.cy.js`                 | Cookie handling                                               |
| **Local storage** | `TS9.1-sanbox-local-storage.cy.js`         | Local storage (cypress-localstorage-commands)                 |
| **Advanced UI**   | `TS9.2-sandbox-advanced-ui-controls.cy.js` | Advanced controls (e.g. drag-drop via @4tw/cypress-drag-drop) |


### 2.3 Supporting structure

- **Page objects:** `cypress/page-objects/` (e.g. `homePage`, `cartPage`, `orderPage`, `myAccountPage`, form/iframe/alert pages).
- **Fixtures:** `cypress/fixtures/users.json`, `products.json` for test data.
- **Support:** `cypress/support/e2e.js` (Mochawesome reporter, custom commands, drag-drop plugin); `commands.js` for custom Cypress commands.
- **Config:** `cypress.config.js` – baseUrl, reporter, projectId, Mochawesome options.

---

## 3. Step-by-step: how to run the project

### Prerequisites

- **Node.js** (v18 or newer recommended)
- **npm** (comes with Node)

### Step 1: Clone the repository

```bash
git clone https://github.com/crypto-account/e-commerce-automation-in-cypress.git
cd e-commerce-automation-in-cypress
```

### Step 2: Install dependencies

```bash
npm install
```

This installs Cypress, @faker-js/faker, cypress-mochawesome-reporter, @4tw/cypress-drag-drop, and cypress-localstorage-commands.

### Step 3: Run all E2E tests (headless)

```bash
npm run cy:run
```

Or directly:

```bash
npx cypress run
```

- Tests run in headless mode (Electron by default).
- Reports are generated in `cypress/reports/` (HTML from Mochawesome).

### Step 4 (optional): Run tests in a specific browser

```bash
npx cypress run --browser chrome
# or
npx cypress run --browser firefox
```

### Step 5 (optional): Open Cypress Interactive UI

```bash
npx cypress open
```

- Choose **E2E Testing** and a browser.
- Pick and run individual specs from the list.

### Step 6: View HTML test report

After a run:

```bash
npm run report:open
```

Or open manually: `cypress/reports/index.html` (e.g. in a browser).

### Step 7 (optional): Run only selected test files

```bash
npx cypress run --spec "cypress/e2e/e-commerce_automation/TS1-e-commerce-login.cy.js"
npx cypress run --spec "cypress/e2e/e-commerce_automation/TS2*.cy.js,cypress/e2e/e-commerce_automation/TS3*.cy.js"
```

---

## 4. CI/CD (CircleCI)

- **Config:** `.circleci/config.yml`
- **Workflow:** `cypress-run-with-report`
- **Steps:** install dependencies and browsers → run `npx cypress run --browser chrome` → store `cypress/reports` as artifacts.

To run the same locally (Chrome, headless):

```bash
npx cypress run --browser chrome
```

---

## 5. Configuration summary


| Item          | Value                                       |
| ------------- | ------------------------------------------- |
| Base URL      | `https://tapsshop.pl/`                      |
| Reporter      | cypress-mochawesome-reporter                |
| Report output | `cypress/reports/` (HTML)                   |
| Test specs    | `cypress/e2e/e-commerce_automation/*.cy.js` |
| Fixtures      | `cypress/fixtures/`                         |
| Page objects  | `cypress/page-objects/`                     |


---

## 6. Quick reference – npm scripts


| Script                | Command                           | Purpose                               |
| --------------------- | --------------------------------- | ------------------------------------- |
| `npm run cy:run`      | `cypress run`                     | Run all E2E tests headless            |
| `npm run report:open` | `open cypress/reports/index.html` | Open last HTML report                 |
| `npx cypress open`    | —                                 | Open Cypress UI (not in package.json) |
