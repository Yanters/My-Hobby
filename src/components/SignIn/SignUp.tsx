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
} from "./SignInElements";

const SignIn = () => {
  const notPossibleHandler = () => {
    var appendParent = document.getElementById("createAccount");
    if (appendParent != null) {
      appendParent.style.background = "#B80F0A";
      appendParent.innerText = "Account already created";
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">My Hobby</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for">Repeat Password</FormLabel>
              <FormInput type="password" required />
              <FormButton
                type="submit"
                id="createAccount"
                onClick={notPossibleHandler}
              >
                Create Account
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
