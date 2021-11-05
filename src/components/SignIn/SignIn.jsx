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
import * as $ from "jquery";

const SignIn = () => {
  $(document).ready(function () {
    $("#buttonLink").hover(
      function () {
        $("#buttonLink").css("background", "linear-gradient(#747eee, #4856f0)");
      },
      function () {
        $("#buttonLink").css("background", "#01bf71");
      }
    );
  });
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">My Hobby</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
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
