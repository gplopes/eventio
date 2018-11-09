function getInitials({ firstName, lastName }) {
  const initials = firstName[0] + lastName[0];
  return initials;
}

export default getInitials;
