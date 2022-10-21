const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const setupNodeEvents = require('./cypress/plugins/index.js')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app-dev.practicespace.health/",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      // allureWriter(on, config);

      return config;
    },
    specPattern: "cypress/e2e/*.feature",
    env: {
      "environment": "staging",
      "email": "lucilene.martins.nascimento+1@gmail.com",
      "password": "12PracticeTest$$"
    }
  },
  watchForFileChanges: true,
  chromeWebSecurity: false,
  projectId: 'htpaeo',
  defaultCommandTimeout: 10000,
  viewportWidth: 1200,
  viewportHeight: 1024,
});