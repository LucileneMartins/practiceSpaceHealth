import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const el = require('../page/onboarding/elements').ELEMENTS;
import Onboarding from '../page/onboarding/methods';
import PersonalDetails from '../page/personalDetail/methods';

Given('User is at the onboarding page', () => {
  cy.accessOnboardingPage();
  Onboarding.validateOnboardingPage();
});

When('User fill the fields on Personal Details', () => {
  PersonalDetails.fillFieldsPersonalDetails();
});

When('The Webpage will send a link to email and a successful message', () => {
  PersonalDetails.validateMessagem();
});

// And('User clicks on login button', () => {

// })

// Then('User is able to successfully login to the Website', () => {

// })
