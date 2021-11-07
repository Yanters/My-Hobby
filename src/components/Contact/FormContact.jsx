import React from "react";
import "./Contact.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const FormSignup = ({ submitForm }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    submitForm(true);
  };

  $(function () {
    $("#datepicker").datepicker();
  });

  $(function () {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "React",
      "TypeScript",
    ];
    $("#tags").autocomplete({
      source: availableTags,
    });
  });

  return (
    <div className="container">
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name..."
          required
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name..."
          required
        />
        <div>
          <div>
            <label htmlFor="male">Gender</label>
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
              <label htmlFor="male"> Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="Female" />
              <label htmlFor="female"> Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="Other" />
              <label htmlFor="other"> Other</label>
            </div>
          </div>
        </div>
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          placeholder="111-222-333"
          required
        />
        <div class="ui-widget">
          <label for="tags">Technology </label>

          <input
            id="tags"
            type="text"
            placeholder="Technologies we should use in our project"
            required
          />
        </div>
        <label htmlFor="datemin">DeadLine</label>
        <input
          type="text"
          id="datepicker"
          placeholder="Pick DeadLine for project"
          required
          maxLength="0"
        />

        <label htmlFor="country">Country Office</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="subject">Project Description</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="More details about the project..."
          style={{ height: "100px" }}
          required
        ></textarea>
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Reset"></input>
      </form>
    </div>
  );
};

export default FormSignup;
