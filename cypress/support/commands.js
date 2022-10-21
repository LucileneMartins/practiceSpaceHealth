// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('accessOnboardingPage', (url) => {
  cy.clearCookies();
  cy.visit('https://app-dev.practicespace.health/therapist-onboarding/1', {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
      win.localStorage.clear();
    },
  });
});

Cypress.Commands.add('login', (url, email, password) => {
  cy.clearCookies();
  cy.visit(url, {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
      win.localStorage.clear();
    },
  });
  cy.get('#username').type(email);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});
