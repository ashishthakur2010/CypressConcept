const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 720,
  defaultCommandTimeout: 4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  includeShadowDom: true,
});
