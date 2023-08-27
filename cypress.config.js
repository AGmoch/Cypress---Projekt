const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '67h2d2',

    env: {
      validEmail: 'example@example.com',
      invalidEmail: 'invalid_email',
      validPassword: 'invalid_email',
      invalidPassword: '',
    },
  includeShadowDom: true,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.js',
    baseUrl: 'http://www.automationpractice.pl/'
  },
});
