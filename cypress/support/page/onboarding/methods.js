const el = require('./elements').ELEMENTS;
class Onboarding {
  validateOnboardingPage() {
    cy.get(el.title).contains('Welcome to PracticeSpace!').should('be.visible');

    cy.contains(el.nextButton).click();
  }
}
export default new Onboarding();
