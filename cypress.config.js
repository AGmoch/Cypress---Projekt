const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '67h2d2',

    env: {
      validEmail: 'example@example.com',
      invalidEmail: 'invalid_email',
      validPassword: 'invalid_email',
      invalidPassword: '',
      APIemail: 'artur.gmoch@gmail.com',
      APIpassword: '123password',
      APItoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYXJ0dXIuZ21vY2hAZ21haWwuY29tIiwidXNlcm5hbWUiOiJhcnR1cmdtb2NoIn0sImlhdCI6MTY5Mjk3NzY0NywiZXhwIjoxNjk4MTYxNjQ3fQ.7eIf8aPoYs0kanvMlzo0cR8yLz7xlTY8IegwFDqIug8'
    },
  includeShadowDom: true,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.js',
    baseUrl: 'http://www.automationpractice.pl/'
  },
});
