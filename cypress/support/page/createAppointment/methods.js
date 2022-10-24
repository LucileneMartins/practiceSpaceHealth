const el = require('./elements').ELEMENTS;
import { futureDateCalendar, clickOnset } from '../Menu/base';

class CreateAppointment {
  clickCreate() {
    cy.get('span').contains('Appointments').should('be.visible');
    cy.get('button').contains(el.addAppointmentButton).click({ force: true });
  }

  addPeople() {
    cy.contains(el.addPeopleButton).click({ force: true });
    cy.contains('Add People').should('be.visible');
    cy.get(el.addPersonCheckbox).click();
    cy.get(el.addButton).eq(5).click({ force: true });
  }

  addAppointmentType() {
    cy.get(el.appointmentTypeCheckbox).click();
    cy.get(el.optionAppointmentType).first().click();
    cy.get(el.addVideoLinkButton).contains('Add Video Link').click();
  }

  addDate(days) {
    cy.get(
      el.dataPikerField
    ).click();
    cy.get('[data-date="' + futureDateCalendar(days) + '"]').click();
  }

  addPrice(price) {
    cy.get(el.priceField).type(price);
  }

  addHour(startHour, endHour, meridiem) {

    cy.get(el.startHourField).click();
    clickOnset(el.hourField, el.hourValueField, startHour)
    clickOnset(el.meridiumField, el.meridiumValueField, meridiem)

    cy.get(el.endHourField).click();
    clickOnset(el.hourField, el.hourValueField, endHour)
    clickOnset(el.meridiumField, el.meridiumValueField, meridiem)


  }

  addStatus() {
    cy.get(el.statusCheckbox).eq(1).click();
    cy.get(el.optionStatus).contains('Confirmed').click();
    cy.get(el.saveButton).contains('Save').click();
  }
  validate() {
    cy.contains('Appointment created successfully').should('be.visible');
    cy.get(el.tableField)
      .contains('Lucilene Test New Client')
      .should('be.visible');
  }
  validateOverlapAppointment() {
    cy.contains(
      'You already have another appointment booked at the selected time. Are you sure you want to proceed with booking this appointment'
    ).should('be.visible');
  }
  validateErrorMessage() {
    cy.contains('Price required.').should('be.visible');
  }
}
export default new CreateAppointment();
