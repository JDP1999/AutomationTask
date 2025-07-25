const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 10000,
    "responseTimeout": 10000,
    "reporter": 'cypress-mochawesome-reporter',
    "reporterOptions": {
      "charts": true,
      "reportPageTitle": 'Report',
      "reportFilename": 'Report',
      "reportDir":"cypress\\reports",
      "embeddedScreenshots": true,
      "inlineAssets": true,
      "html":true,
      "saveAllAttempts":true
    },
    "screenshotsFolder":"cypress\\reports\\screenshots",
    "videosFolder":"cypress\\reports\\videos",
    "chromeWebSecurity": false,
    "includeShadowDom": true,
    viewportWidth:1200,
    viewportHeight:1200,
    baseUrl: 'https://www.sogeti.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
