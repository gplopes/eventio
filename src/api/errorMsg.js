const INVALID_PASSWORD = "Sorry, this password is invalid";
const GENERAL_ERROR = "Error, please try again";

export const getErrorMsg = data => {
  const type = data.response.error;

  if (type== "User.InvalidPassword") return INVALID_PASSWORD;
  return GENERAL_ERROR;
};

export default getErrorMsg;
