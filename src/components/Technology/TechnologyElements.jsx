import styled from "styled-components";

export const List = styled.div`
  list-style-type: none;
  display: flex;
  margin: 3rem 0;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    margin: 0 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
`;

export const ListItem = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
`;

export const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-height: 568px) {
    display: none;
  }
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

export const AboutRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-shrink: 1;

  @media screen and (max-width: 768px) {
    flex-wrap: ${({ imgStart }) => (!imgStart ? "wrap" : `wrap-reverse`)};
  }
`;
