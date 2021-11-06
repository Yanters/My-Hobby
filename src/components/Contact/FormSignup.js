import React from "react";
import "./Contact.css";
// import * as $ from "jquery";
const FormSignup = ({ submitForm }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    submitForm(true);
  };

  return (
    <div className="container">
      <form action="" onSubmit={submitHandler}>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name..."
          required
        />
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name..."
          required
        />
        <div>
          <div>
            <label for="male">Gender</label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyItems: "flex-end",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
              alignContent: "center",
            }}
          >
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                required
              />
              <label for="male"> Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="Female" />
              <label for="female"> Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="Other" />
              <label for="other"> Other</label>
            </div>
          </div>
        </div>
        <br />
        <label for="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          placeholder="111-222-333"
          required
        />
        <label for="datemin">DeadLine</label>
        <br /> <br />
        <input
          type="date"
          id="datemin"
          name="datemin"
          min="2021-11-06"
          required
        />
        <br />
        <br />
        <label for="country">Country Office</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Project Description</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
          required
        ></textarea>
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Reset"></input>
      </form>
    </div>
  );
};

export default FormSignup;
