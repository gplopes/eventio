
type inputType = {
  firstName: string,
  lastName: string,
};

export function getInitials({ firstName = "", lastName  = "" }: inputType) {
  const initials = firstName[0] + lastName[0];
  return initials || "";
}

export function getFullName(user: inputType) {
  const firstName = user.firstName || "";
  const lastName = user.lastName || "";
  return `${firstName} ${lastName}`;
}

function getName(user: inputType) {
  const fullName = getFullName(user);
  const initials = getInitials(user);
  return { fullName, initials };
}

export default getName;
