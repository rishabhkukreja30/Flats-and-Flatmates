export const checkSigninData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = password.length >= 5;

  if (!isEmailValid) return "Email is not valid";

  if (!isPasswordValid) return "Password is not valid";
};

export const checkSignupData = (
  username,
  fullName,
  email,
  phoneNumber,
  password,
  confirmPassword
) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isFullNameValid = fullName.length >= 5;
  const isPasswordValid = password.length >= 5;
  const isPhoneNumberValid = /^[0-9]{10}$/.test(phoneNumber);
  const isUserNameValid = username.length >= 5;
  const isConfirmPasswordValid = password === confirmPassword;

  if (!isEmailValid) return "Email is not valid";
  if (!isFullNameValid) return "Name should be at least 5 characters long";
  if (!isPasswordValid) return "Password should be at least 5 characters long";
  if (!isUserNameValid) return "Username should be at least 5 characters long";
  if (!isPhoneNumberValid) return "Phone Number should contain 10 digits";
  if (!isConfirmPasswordValid)
    return "Password and comfitm Password do not match";
};
