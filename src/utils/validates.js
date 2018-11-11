export const validatePassword = (password, repeatPassword) => {
  return {
    valid: password === repeatPassword,
    error: "Passwords do match"
  };
};

export const validateEmail = email => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return {
    valid: regex.test(email),
    error: "Wrong email address"
  };
};

export const validateCapacity = value => {
  return {
    valid: value > 1,
    error: "You can be all alone on the event"
  };
};

export const validateDate = value => {
  const now = new Date();
  const inputDate = new Date(value);
  return {
    valid: inputDate > now,
    error: "We haven't invented time machine yet :)"
  };
};