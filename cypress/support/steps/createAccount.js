import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const el = require('../page/onboarding/elements').ELEMENTS;
import Onboarding from '../page/onboarding/methods';
import PersonalDetails from '../page/personalDetail/methods';

Given('User is at the onboarding page', () => {
  cy.accessOnboardingPage();
  Onboarding.validateOnboardingPage();
});

When('User fill the fields on personal details', () => {
  PersonalDetails.fillFieldsPersonalDetails();
});

When('The webpage will send a link to email and a successfully message', () => {
  PersonalDetails.validateMessagem();
});

