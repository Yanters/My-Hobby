import styled from "styled-components";

export const AboutContainer = styled.div<{ isLight: boolean }>`
  color: #fff;
  background: ${({ isLight }) => (isLight ? "#f9f9f9" : "#010606")};
  height: 100vh;
  display: flex;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  justify-content: center;
  flex-shrink: 1;
`;

export const AboutRow = styled.div<{ imgStart: any }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-shrink: 1;

  @media screen and (max-width: 768px) {
    flex-wrap: ${({ imgStart }) =>
      imgStart ? "wrap-reverse" : `wrap-reverse`};
  }
`;

export const Column1 = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 0 15px;
  flex-shrink: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Column2 = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 0 15px;
  flex-shrink: 1;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  width: 100%;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<{ lightText: boolean }>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p<{ darkText: boolean }>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    max-width: 50%;
  }

  @media screen and (max-width: 480px) {
    max-width: 40%;
  }
`;
