import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
// import './Form.css';

const FormSignup = ({ submitForm, login }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="SignUpInTitle">Sign Up</h1>
        <h1>Get started with us today!</h1>

        <div className="form-inputs">
          <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input
              className="form-input input-field"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <div className="input-container">
            <i className="fa fa-key icon"></i>
            <input
              className="form-input input-field"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <div className="input-container">
            <i className="fa fa-check-square icon"></i>
            <input
              className="form-input input-field"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
          </div>
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login{" "}
          <span style={{ color: "#27cdff" }} onClick={login}>
            here
          </span>
        </span>
        <div className="signupSocial">
          <h2> Login with Social Media </h2>
        </div>

        <ul className="list-unstyled social-icon">
          <li className="d-inline-block">
            <a href="/" className="d-block">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="d-inline-block">
            <a href="/" className="d-block">
              <i className="fa fa-google"></i>
            </a>
          </li>
          <li className="d-inline-block">
            <a href="/" className="d-block">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="d-inline-block">
            <a href="/" className="d-block">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormSignup;
