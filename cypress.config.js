const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://simpletestsite.fabrykatestow.pl/',

    setupNodeEvents(on, config) {
    },
  },
});
