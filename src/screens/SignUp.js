import "../styles/SignUp.scss";
import backdrop from "../assets/backdrop.png";
import { useState } from "react";
import useInput from "../hooks/use-input";
import { isName, isEmail, isPassword, isPhoneNo } from "../constants/functions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    errMsg: emailErrMsg,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    errMsg: passwordErrMsg,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  const {
    value: cnfPasswordValue,
    isValid: cnfPasswordIsValid,
    hasError: cnfPasswordHasError,
    errMsg: cnfPasswordErrMsg,
    valueChangeHandler: cnfPasswordChangeHandler,
    inputBlurHandler: cnfPasswordBlurHandler,
    reset: resetCnfPassword,
  } = useInput(isPassword);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    errMsg: nameErrMsg,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isName);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    errMsg: phoneErrMsg,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isPhoneNo);

  let formIsValid = false;

  if (
    emailIsValid &&
    passwordIsValid &&
    cnfPasswordIsValid &&
    nameIsValid &&
    phoneIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (passwordValue !== cnfPasswordValue) {
      resetCnfPassword();
      resetPassword();
      alert("Passwords do not match");
      return;
    }

    if (!formIsValid) {
      alert("Please check the inputs again! ");
      return;
    }
    console.log(emailValue);
    console.log(passwordValue);
    console.log(nameValue);
    console.log(phoneValue);
    navigate("/barchart");
    resetEmail();
    resetName();
    resetCnfPassword();
    resetPassword();
    resetPhone();
    setIsChecked(false);
  };
  return (
    <>
      <div className="screen">
        <div className="screen__container">
          <div className="backdrop">
            <img className="backdrop__img" src={backdrop} alt="Background" />
            <p className="backdrop__title">Choose a date range</p>
            <p className="backdrop__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. vitae
              nobis dolorum.
            </p>
          </div>
          <div className="form">
            <div className="form__title">Create an account</div>
            <form className="form__signup" onSubmit={submitHandler}>
              <div className="form__content">
                <label htmlFor="Email" className="form__label">
                  Your email address
                </label>
                <input
                  type="text"
                  name="Email"
                  className={`form__input form__input--focus ${
                    emailHasError ? "form__input--error" : ""
                  } `}
                  value={emailValue}
                  onBlur={emailBlurHandler}
                  onChange={emailChangeHandler}
                />
                {emailHasError && <p className="form__error">{emailErrMsg}</p>}
              </div>
              <div className="form__content">
                <label htmlFor="Password" className="form__label">
                  Your password
                </label>
                <input
                  name="Password"
                  type="password"
                  className={`form__input form__input--focus ${
                    passwordHasError ? "form__input--error" : ""
                  } `}
                  value={passwordValue}
                  onBlur={passwordBlurHandler}
                  onChange={passwordChangeHandler}
                />
                {passwordHasError && (
                  <p className="form__error">{passwordErrMsg}</p>
                )}
              </div>
              <div className="form__content">
                <label htmlFor="Confirm password" className="form__label">
                  Confirm your password
                </label>
                <input
                  name="Confirm password"
                  type="password"
                  className={`form__input form__input--focus ${
                    cnfPasswordHasError ? "form__input--error" : ""
                  } `}
                  value={cnfPasswordValue}
                  onBlur={cnfPasswordBlurHandler}
                  onChange={cnfPasswordChangeHandler}
                />
                {cnfPasswordHasError && (
                  <p className="form__error">{cnfPasswordErrMsg}</p>
                )}
              </div>
              <div className="form__content">
                <label htmlFor="Full Name" className="form__label">
                  Your full name
                </label>
                <input
                  name="Full Name"
                  type="text"
                  className={`form__input form__input--focus ${
                    nameHasError ? "form__input--error" : ""
                  } `}
                  value={nameValue}
                  onBlur={nameBlurHandler}
                  onChange={nameChangeHandler}
                />
                {nameHasError && <p className="form__error">{nameErrMsg}</p>}
              </div>
              <div className="form__content">
                <label htmlFor="Phone Number" className="form__label">
                  Your phone number
                </label>
                <input
                  name="Phone Number"
                  type="text"
                  className={`form__input form__input--focus ${
                    phoneHasError ? "form__input--error" : ""
                  } `}
                  value={phoneValue}
                  onBlur={phoneBlurHandler}
                  onChange={phoneChangeHandler}
                />
                {phoneHasError && <p className="form__error">{phoneErrMsg}</p>}
              </div>
              <div className="form__content form__content--checkbox">
                <input
                  name="Terms and conditions"
                  type="checkbox"
                  className="form__input form__input--checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label
                  htmlFor="Terms and conditions"
                  className="form__label form__label--checkbox"
                >
                  I agree to the Terms and Conditions
                </label>
              </div>
              <div className="form__action">
                <input
                  className={`form__btn ${
                    isChecked ? "" : "form__btn--disabled"
                  } `}
                  type="submit"
                  value="Create account"
                  disabled={isChecked ? !"disabled" : "disabled"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
