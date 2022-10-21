import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateAppointment from '../page/createAppointment/methods';
import Menu from '../page/Menu/lateralMenu';
import dataCreateAppointment from '../page/createAppointment/data'

Given('User access the Login page', () => {
    cy.login('/',
        Cypress.env('email'),
        Cypress.env('password'));
})

When('User access create appointment', () => {
    cy.contains('Lucilene').should('be.visible')
    Menu.selectMenu('Appointment')
    CreateAppointment.clickCreate();
})


When('fill the all mandatories fields with valid data', () => {
    CreateAppointment.addPeople();
    CreateAppointment.addAppointmentType();
    CreateAppointment.addDate(3, dataCreateAppointment.data.PRICE);
    CreateAppointment.addStatus();
})

Then('the system will return a sucessufully message', () => {
    CreateAppointment.validate();
})

When('fill in all mandatory fields overlaying an appointment already scheduled', () => {
    CreateAppointment.addPeople();
    CreateAppointment.addAppointmentType();
    CreateAppointment.addDate(9, dataCreateAppointment.data.PRICE);
    CreateAppointment.addStatus();
})

Then('the system will return an alert message informing you of the overlap', () => {
    CreateAppointment.validateOverlapAppointment()
})

When('fill in the fields and do not inform the price field', () => {
    CreateAppointment.addPeople();
    CreateAppointment.addAppointmentType();
    CreateAppointment.addDate(3, " ");
    CreateAppointment.addStatus();

})


Then('the system will return an error message', () => {
    CreateAppointment.validateErrorMessage()
})



