function futureDateCalendar(days) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate() + days;
  const futureDate = year + '-' + month + '-' + day;

  return futureDate;
}

function clickOnset(element, element2, value) {

  if (element2 != value) {
    cy.get(element).click();
  }

}

export { futureDateCalendar, clickOnset };
