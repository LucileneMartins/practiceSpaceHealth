function futureDateCalendar(days) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate() + days;
  const futureDate = year + '-' + month + '-' + day;

  return futureDate;
}

function clickOnset(element, element2, value) {

  cy.get(element2).invoke('text').then(($textElement) => {

    if ($textElement != value) {
      cy.log('VALOR do ELEMENT2 => ' + $textElement)
      cy.get(element).click();
      clickOnset(element, element2, value);
    }
    else {
      cy.log('Done!')
    }
  })
}

export { futureDateCalendar, clickOnset };
