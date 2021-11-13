import React, { useState } from "react";
import "./Contact.css";
import FormContact from "./FormContact";
import FormSuccess from "./FormSuccess";
import image5 from "../../images/5.svg";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div
      className={
        !isSubmitted
          ? "contact-container"
          : "contact-container contact-container2"
      }
    >
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={image5} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormContact submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Contact;
