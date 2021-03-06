import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  overflow-y: auto;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;

  /* @media screen and (max-width: 460px) {
     height: 80%; 
     align-items: center; 
    width: 90%;
  } */
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  width: 90%;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

export const FormContent = styled.div`
  min-height: 90vh;
  width: auto;
  height: auto;
  display: flex;
  justify-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 40vh;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  /* @media screen and (max-width: 400px) {
    padding: 32px 32px;
  } */
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 0px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;

  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
