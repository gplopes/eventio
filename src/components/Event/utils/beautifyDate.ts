const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function getDate(timestamp: string | Date): string {
  const date = new Date(timestamp);
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();

  // AM-PM
  const amPm = hours >= 12 ? 'PM' : 'AM';
  // Mins
  const dateMins = date.getMinutes();
  const mins = dateMins < 10 ? `0${dateMins}` : dateMins;
  // Time
  const time = `${date.getHours() % 12}:${mins} ${amPm}`;

  return `${month} ${day}, ${year} - ${time}`;
}


export default getDate;
