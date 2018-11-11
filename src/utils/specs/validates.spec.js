import { validateEmail, validatePassword, validateCapacity, validateDate } from '../validates';

test("validateEmail checks for valid email", () => {
  const correctEmail = "email@gmail.com";
  const incorrectEmail = "email@.com";
  expect(validateEmail(correctEmail).valid).toBe(true);
  expect(validateEmail(incorrectEmail).valid).toBe(false);
});

test("validatePassword, compare 2 strings (password)", () => {
  const pwd = "myPa55";
  const pwdRepeat = "myPa55";
  expect(validatePassword(pwd, pwdRepeat).valid).toBe(true);
});

test("validateCapacity checks min capacity (2) for input", () => {
  expect(validateCapacity(0).valid).toBe(false);
  expect(validateCapacity(2).valid).toBe(true);
});

test("validateDate checks with dates are only forward from the current date", () => {
  const today = new Date();
  const tomorrow = new Date();
  const yesterday = new Date();

  tomorrow.setDate(today.getDate()+1);
  yesterday.setDate(today.getDate() -1);

  expect(validateDate(yesterday).valid).toBe(false);
  expect(validateDate(today).valid).toBe(true);
  expect(validateDate(tomorrow).valid).toBe(true);
});