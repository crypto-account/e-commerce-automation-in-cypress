const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fqyazx',
  e2e: {
    baseUrl: 'https://tapsshop.pl/',

    setupNodeEvents(on, config) {
    },
  },
});
