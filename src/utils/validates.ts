export type TypeValidation = {
  valid: boolean,
  error: string
};

export const validatePassword = (password: string, repeatPassword: string): TypeValidation => {
  return {
    valid: password === repeatPassword,
    error: "Passwords do match"
  };
};

export const validateEmail = (email: string): TypeValidation => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return {
    valid: regex.test(email),
    error: "Wrong email address"
  };
};

export const validateCapacity = (value: number): TypeValidation => {
  return {
    valid: value > 1,
    error: "You can be all alone on the event"
  };
};

export const validateDate = (value: string | Date): TypeValidation => {
  const now = new Date();
  const inputDate = new Date(value);
  return {
    valid: inputDate >= now,
    error: "We haven't invented time machine yet :)"
  };
};
