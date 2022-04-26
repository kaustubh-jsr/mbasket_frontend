export const loginFormValidator = (email, password) => {
  let errors = { emailErrors: [], passwordErrors: [] };
  if (email.trim() === "") {
    errors.emailErrors.push("Email cannot be empty");
  } else {
    let at = email.indexOf("@");
    let dot = email.indexOf(".");
    if (at < 1) {
      errors.emailErrors.push("Enter a valid email address");
    } else {
      if (dot === email.trim().length - 1) {
        errors.emailErrors.push("Enter a valid email address");
      }
    }
  }

  if (password.trim() === "") {
    errors.passwordErrors.push("Password cannot be empty");
  } else {
    if (password.trim().length < 6) {
      errors.passwordErrors.push(
        "Password should be greater than 6 characters"
      );
    }
  }
  if (errors.emailErrors.length === 0 && errors.passwordErrors.length === 0) {
    return false;
  }
  return errors;
};

export const registerFormValidator = (
  firstName,
  lastName,
  email,
  password,
  rePassword
) => {
  let errors = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passError: "",
    mismatchError: "",
  };

  if (firstName.trim() === "") {
    errors.firstNameError = "First Name cannot be empty";
  }
  if (lastName.trim() === "") {
    errors.firstNameError = "Last Name cannot be empty";
  }
  if (email.trim() === "") {
    errors.emailError = "Email cannot be empty";
  } else {
    let at = email.indexOf("@");
    let dot = email.indexOf(".");
    if (at < 1) {
      errors.emailError = "Enter a valid email address";
    } else {
      if (dot === email.trim().length - 1) {
        errors.emailError = "Enter a valid email address";
      }
    }
  }
  if (password.trim() === "" || password.trim().length <= 6) {
    errors.passError = "Password should be more than 6 characters";
  }

  if (rePassword !== password) {
    errors.mismatchError = "Passwords must be same";
  }
  let isError = false;
  for (let error in errors) {
    if (errors[error].length !== 0) {
      isError = true;
      break;
    }
  }
  if (isError) {
    return errors;
  }
  return false;
};
