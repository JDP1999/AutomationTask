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
import './commands';
import 'cypress-mochawesome-reporter/register';
import "cypress-mailslurp";

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };
// pay attention to the "screenshot" constant because if you specify an incorrect file name mask, the screenshot will not be included in the report

// Alternatively you can use CommonJS syntax:
// require('./commands')
