// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import '@shelex/cypress-allure-plugin';

/**
 * Opens the main page for login into the application.
 */
beforeEach(() =>{cy.visit('#/sign_in?last_page=/')})

/**
 * Cleans the data for the test to run without any cache or saved data.
 */
beforeEach(() => {})
