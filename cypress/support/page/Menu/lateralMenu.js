const el = require('./elements').ELEMENTS;
class Menu {
  selectMenu(menu) {
    switch (menu) {
      case 'Home':
        cy.get(el.home).click();

        break;
      case 'Clients':
        cy.get(el.client).click();

        break;
      case 'Papers':
        cy.get(el.papers).click();

        break;
      case 'Appointment':
        cy.get(el.appointment).eq(0).click();

        break;
      case 'Money':
        cy.get(el.money).click();

        break;
      case 'Calendar':
        cy.get(el.calendar).eq(1).click();

        break;
      case 'Personal Website':
        cy.get(el.personalWebsite).click();

        break;
      case 'Video':
        cy.get(el.video).click();

        break;
      default:
        cy.log('Please select an option on Menu! ');
    }
  }
}
export default new Menu();
