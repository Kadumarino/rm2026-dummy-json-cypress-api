const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    charts: true,
    reportPageTitle: 'Relatório de Testes - DummyJSON API',
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'longDate',
    showPassed: true,
    showFailed: true,
    showPending: true,
    showSkipped: false,
    code: true,
    autoOpen: false,
    includeHooks: true,
    videoOnFailOnly: false,
  },
  e2e: {
    baseUrl: "https://dummyjson.com",
    video: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Task para adicionar contexto ao relatório
      on('task', {
        addTestContext(context) {
          if (context && context.title && context.value) {
            console.log('\n' + '='.repeat(60));
            console.log(`${context.title}`);
            console.log('='.repeat(60));
            if (typeof context.value === 'object') {
              console.log(JSON.stringify(context.value, null, 2));
            } else {
              console.log(context.value);
            }
            console.log('='.repeat(60) + '\n');
          }
          return null;
        }
      });
      
      return config;
    },
  },
});