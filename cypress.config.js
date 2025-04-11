const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
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
    viewportWidth:1200,
    viewportHeight:1200,
    baseUrl: 'https://www.sogeti.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
