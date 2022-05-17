export const isName = (value) => {
  return {
    valueIsValid: value.trim() !== "",
    errMsg: "Name cannot be empty",
  };
};
export const isEmail = (value) => {
  return {
    valueIsValid: value.includes("@"),
    errMsg: "Please enter a valid email",
  };
};
export const isPhoneNo = (value) => {
  const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
  return {
    valueIsValid: !(!value || regex.test(value) === false || value.length < 10),
    errMsg: "Invalid phone number",
  };
};

export const isPassword = (value) => {
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{6,}/;
  const passwordLength = value.length;
  const uppercasePassword = uppercaseRegExp.test(value);
  const lowercasePassword = lowercaseRegExp.test(value);
  const digitsPassword = digitsRegExp.test(value);
  const specialCharPassword = specialCharRegExp.test(value);
  const minLengthPassword = minLengthRegExp.test(value);
  let errMsg = "";
  if (passwordLength === 0) {
    errMsg = "Password cannot be empty";
  } else if (!uppercasePassword) {
    errMsg = "Password should contain atleast one Uppercase character";
  } else if (!lowercasePassword) {
    errMsg = "Password should contain atleast one Lowercase character";
  } else if (!digitsPassword) {
    errMsg = "Password should contain atleast one digit";
  } else if (!specialCharPassword) {
    errMsg = "Password should contain atleast one special characters";
  } else if (!minLengthPassword) {
    errMsg = "Password should contain atleast 6 characters";
  } else {
    errMsg = "";
  }

  return {
    valueIsValid: errMsg.length === 0,
    errMsg,
  };
};
