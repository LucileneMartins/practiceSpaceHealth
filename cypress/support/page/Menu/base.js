function futureDateCalendar(days) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate() + days;
  const futureDate = year + '-' + month + '-' + day;

  return futureDate;
}

export { futureDateCalendar };
