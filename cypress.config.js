const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fqyazx',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: 'https://tapsshop.pl/',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
