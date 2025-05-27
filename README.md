Cypress Test Automation

Overview

This project demonstrates a professional approach to web test automation using Cypress, combining Gherkin (Cucumber) for test specification, the Page Object Model (POM) for structured test logic, and a layer of reusable adapter-based abstraction for interaction handling.

The goal is to showcase a scalable and maintainable architecture, ideal for QA teams, learning environments, and proof-of-concept implementations that aim to follow best practices in UI test automation.

Tech Stack

Cypress – JavaScript-based end-to-end testing framework

Cucumber + Gherkin – Human-readable test definitions

Page Object Model (POM) – Encapsulation of UI logic and structure

Reusable Adapters – Shared base class for interaction abstraction

Allure Reports – Visual test reporting support (optional)

Project Structure

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

How to Run

Prerequisites

Node.js installed

Git installed

Cypress installed as a dev dependency

Setup

git clone https://github.com/ScafiLucas/cypress-test-automation.git
cd cypress-test-automation
npm install

Test Execution

To open Cypress Test Runner UI:

npx cypress open

To run all tests in headless mode:

npx cypress run

To run a specific test:

npx cypress run --spec "cypress/integration/page_2/page_2.feature"

What is Being Tested

The test suite for Page 2 covers:

Dynamic form layout switching (Horizontal, Vertical, Inline)

Input restrictions (allow only alphanumeric characters)

Country selection via dropdown menu

Assertions on form visibility and field values

Validation of expected behavior through visual and functional checks

Testing Patterns and Architecture

Decoupled POM: Separation between selectors, page logic, and step definitions

Base Adapter Class: Central class for click, type, and search abstractions

Gherkin with Cucumber: Human-readable test specification

Modular structure: Highly reusable and extensible organization

Gherkin Sample

When I click the Horizontal Button
Then I should check that the Horizontal Form is loaded

When I type an non-alphabetic character in the Input element
Then I should not see any input on the Input element

When I select a country on the Select element
Then I should the selected country on the Select element

Allure Reports (optional)

If enabled, the project can output results compatible with Allure:

allure generate allure-results --clean -o allure-report
allure open allure-report

You must have Allure CLI installed:

npm install -g allure-commandline

License

This project is licensed under the terms of the MIT License.

Author

Created by Lucas Scafi as part of a portfolio initiative to demonstrate advanced test automation practices using Cypress, Cucumber, and scalable design patterns.

LinkedInGitHub

