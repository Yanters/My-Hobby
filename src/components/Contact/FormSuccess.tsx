import React from "react";
import "./Contact.css";
import image6 from "../../images/6.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your email!</h1>
      <img className="form-img-2" src={image6} alt="success" />
    </div>
  );
};

export default FormSuccess;
