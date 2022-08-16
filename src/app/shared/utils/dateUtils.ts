export function dateDifferenceInDays(date1 : Date, date2: Date) : number {
  const differenceInMilliseconds = date2.getTime() - date1.getTime();
  const days = Math.ceil(differenceInMilliseconds / (1000 * 3600 * 24));
  return days;
}
export function dateDifferenceInMonths(date1 : Date, date2 : Date) : number {
  let months = 0;
  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth() + 1;
  months += date2.getMonth();
  return months;
}
