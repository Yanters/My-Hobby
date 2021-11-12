import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";
import { ButtonLink } from "../Intro/IntroElements";
import $ from "jquery";

const SignIn = () => {
  $(document).ready(function () {
    $("#buttonLink").hover(
      function () {
        $("#buttonLink").css("background", "linear-gradient(#0ba867, #12774d)");
      },
      function () {
        $("#buttonLink").css("background", "#01bf71");
      }
    );
  });

  const appendInfoHandler = () => {
    const isExisting = document.getElementsByClassName("appended")[0];
    if (isExisting) return;
    const appendParent = document.getElementById("append");
    var toAppend = document.createElement("div");
    toAppend.classList.add("appended");
    toAppend.style.color = "white";
    toAppend.style.textAlign = "center";
    toAppend.style.marginTop = "20px";
    var content = document.createTextNode("Wrong Login Or Password!");
    toAppend.appendChild(content);
    appendParent?.appendChild(toAppend);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">My Hobby</Icon>
          <FormContent>
            <Form action="#" id="append">
              <FormH1>Sign In</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit" onClick={appendInfoHandler}>
                Continue
              </FormButton>
              <Text>Forgot password</Text>
              <ButtonLink
                id="buttonLink"
                style={{ marginTop: "40px" }}
                primary={true}
                darktext={false}
                bigtext={false}
                fontbig={false}
                to="sign-up"
              >
                Create an account
              </ButtonLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
