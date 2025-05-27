# Cypress Test Automation

## Overview

This project demonstrates a professional approach to web test automation using [Cypress](https://www.cypress.io/), combining **Gherkin (Cucumber)** for test specification, the **Page Object Model (POM)** for structured test logic, and a layer of **reusable adapter-based abstraction** for interaction handling.

The goal is to showcase a scalable and maintainable architecture, ideal for QA teams, learning environments, and proof-of-concept implementations that aim to follow best practices in UI test automation.

## Tech Stack

- **Cypress** – JavaScript-based end-to-end testing framework
- **Cucumber + Gherkin** – Human-readable test definitions
- **Page Object Model (POM)** – Encapsulation of UI logic and structure
- **Reusable Adapters** – Shared base class for interaction abstraction
- **Allure Reports** – Visual test reporting support (optional)

## Project Structure

```plaintext
cypress/
├── integration/             # Gherkin (.feature) files organized by page/flow
│   └── page_2/              # Page 2 form layout interaction and validation tests
├── support/
│   ├── elements/            # Centralized element selectors per page
│   ├── pageobjects/         # Encapsulated interaction logic (POM)
│   ├── steps/               # Step definitions (Given, When, Then)
│   ├── testingdata/         # Static data and test credentials
│   ├── commands.js          # Custom Cypress commands
│   └── index.js             # Cypress global setup file
├── plugins/                 # Cypress plugin configurations
├── fixtures/                # Static JSON data (mocks)
├── screenshots/             # Screenshots from test failures
├── videos/                  # Video recordings of test runs (if enabled)
Bugs/                        # Manual bug documentation folder
allure-results/              # Allure test result data
```

## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- Git installed
- Cypress installed as a dev dependency

### Setup

```bash
git clone https://github.com/ScafiLucas/cypress-test-automation.git
cd cypress-test-automation
npm install
```

### Run Tests

To open the Cypress Test Runner UI:

```bash
npx cypress open
```

To run all tests in headless mode:

```bash
npx cypress run
```

To run a specific test:

```bash
npx cypress run --spec "cypress/integration/page_2/page_2.feature"
```

## What is Being Tested

The Page 2 test suite includes:

- Dynamic form layout switching (Horizontal, Vertical, Inline)
- Input field restrictions (allow only alphanumeric characters)
- Dropdown country selection
- Form visibility assertions
- Functional and visual validation of expected behavior

## Testing Patterns and Architecture

- **Decoupled POM** – Separates selectors, logic, and step bindings
- **Base Adapter Class** – Central abstraction for interaction methods
- **Gherkin with Cucumber** – Test steps written in business-readable syntax
- **Modular and reusable structure** – Ideal for long-term scalability

## Gherkin Sample

Example of Gherkin syntax used in this project:

```gherkin
When I click the Horizontal Button
Then I should check that the Horizontal Form is loaded

When I type a non-alphanumeric character in the Input element
Then I should not see any input on the Input element

When I select a country on the Select element
Then I should see the selected country on the Select element
```

## Allure Reports (optional)

To generate and open a test report using Allure:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

Install Allure CLI globally if needed:

```bash
npm install -g allure-commandline
```

## License

This project is licensed under the terms of the [MIT License](LICENSE).

## Author

Created by **Lucas Scafi** as part of a portfolio initiative to demonstrate advanced test automation practices using Cypress, Cucumber, and scalable design patterns.

- [LinkedIn](https://www.linkedin.com/in/lucasscafi/)
- [GitHub](https://github.com/ScafiLucas)
