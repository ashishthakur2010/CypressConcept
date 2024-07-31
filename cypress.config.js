const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 720,
  defaultCommandTimeout: 4000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportPageTitle: "Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: false,
    reportDir: "cypress/reports/",
    overwrite: false,
    code: true,
    timeStamp: "longDate",
    showPassed: true,
    html: true,
    json: false,
    charts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: [
      //"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/e2e/Naukri/**/*.cy.{js,jsx,ts,tsx}",
    ],
  },
  includeShadowDom: true,
});
