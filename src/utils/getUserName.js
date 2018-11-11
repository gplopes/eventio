export function getInitials({ firstName = "", lastName  = "" }) {
  const initials = firstName[0] + lastName[0];
  return initials || "";
}

export function getFullName(user = {}) {
  const firstName = user.firstName || "";
  const lastName = user.lastName || "";
  return `${firstName} ${lastName}`;
}

function getName(user) {
  const fullName = getFullName(user);
  const initials = getInitials(user);
  return { fullName, initials };
}

export default getName;