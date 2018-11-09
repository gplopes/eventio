const monthNames = [
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

function getDate(timestamp) {
  const date = new Date(timestamp);
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const time = `${date.getHours() % 12}:${date.getMinutes()} ${amPm}`
  return `${month} ${day}, ${year} - ${time}`;
}


export default getDate;