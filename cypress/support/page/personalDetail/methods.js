const el = require('./elements').ELEMENTS;
import dataPersonalDetails from './data';
class PersonalDetails {

    fillFieldsPersonalDetails() {
        cy.get(el.firstName).type(dataPersonalDetails.data.FIRST_NAME);
        cy.get(el.lastName).type(dataPersonalDetails.data.LAST_NAME);
        cy.get(el.email).type(dataPersonalDetails.data.EMAIL);
        cy.get(el.confirmEmail).type(dataPersonalDetails.data.EMAIL);
        cy.get(el.password).type(dataPersonalDetails.data.PASSWORD);
        cy.get(el.confirmPassword).type(dataPersonalDetails.data.PASSWORD);
        cy.get(el.agreementCheckbox).eq(0).click({ force: true });
        cy.get(el.privacyAndTermsCheckbox).eq(1).click({ force: true });
        cy.contains(el.nextButton).click();
    }

    validateMessagem() {
        cy.contains('Verify your email You will need to verify your email to continue registration.')
            .should('be.visible')

    }


}
export default new PersonalDetails();