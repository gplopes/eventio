import getUserName, { getInitials, getFullName } from "../getUserName";

const userMock = {
  id: "58493e0b691ecc0d3da51bfe",
  firstName: "Robert",
  lastName: "Rossmann",
  email: "robert.rossmann@strv.com",
  createdAt: "2016-12-08T10:46:33.901Z",
  updatedAt: "2016-12-08T10:46:33.901Z"
};

test("getFullName - get user fullname from user object", () => {
  const fullName = `${userMock.firstName} ${userMock.lastName}`;
  expect(getFullName(userMock)).toEqual(fullName);
});

test("getInitial - get user initials from user object", () => {
  const initials = "RR";
  expect(getInitials(userMock)).toEqual(initials);
});

test("getUserName - it shoulld return both initials and fullname from user boject", () => {
  const fullName = `${userMock.firstName} ${userMock.lastName}`;
  const initials = "RR";
  const result = { fullName, initials };
  expect(getUserName(userMock)).toEqual(result);
});