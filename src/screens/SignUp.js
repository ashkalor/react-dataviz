import "../styles/SignUp.scss";
import backdrop from "../assets/backdrop.png";
import { useState } from "react";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
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
                  className="form__input form__input--focus"
                />
              </div>
              <div className="form__content">
                <label htmlFor="Password" className="form__label">
                  Your password
                </label>
                <input
                  name="Password"
                  type="password"
                  className="form__input form__input--focus"
                />
              </div>
              <div className="form__content">
                <label htmlFor="Confirm password" className="form__label">
                  Confirm your password
                </label>
                <input
                  name="Confirm password"
                  type="password"
                  className="form__input form__input--focus"
                />
              </div>
              <div className="form__content">
                <label htmlFor="Full Name" className="form__label">
                  Your full name
                </label>
                <input
                  name="Full Name"
                  type="text"
                  className="form__input form__input--focus"
                />
              </div>
              <div className="form__content">
                <label htmlFor="Phone Number" className="form__label">
                  Your phone number
                </label>
                <input
                  name="Phone Number"
                  type="text"
                  className="form__input form__input--focus"
                />
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
                  className="form__btn"
                  type="submit"
                  value="Create account"
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
