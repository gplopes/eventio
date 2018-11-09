function getFullName(item) {
  const firstName = item.firstName || "";
  const lastName = item.lastName || "";
  return `${firstName} ${lastName}`;
}

export default getFullName;
