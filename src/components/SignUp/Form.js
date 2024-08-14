import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import AboutSlider3 from "../../assets/Images/AboutUs/AboutSlider3.png"
import SignIn from "../SignIn/SignIn";
const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLogin, setLogin] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const loginForm = () => {
    setLogin(!isLogin);
  };
  return (
    <>
      <div  className="form-container">
           
        
        <div className="form-content-left">
          <img className="form-img img-fluid mx-auto" src={AboutSlider3} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <>
          {!isLogin && (
            <FormSignup submitForm={submitForm} login={loginForm} />
          )}
          {isLogin && (
            <SignIn submitForm={submitForm} login={loginForm} />
          )}
          </>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
