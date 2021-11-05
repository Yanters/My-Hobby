import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import {
  AboutContainer,
  AboutWrapper,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
} from "../About/AboutElements";
import image from "../../images/4.svg";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Img,
  ImgWrap,
  AboutRow,
} from "./TechnologyElements";

const Technology = () => {
  return (
    <>
      <AboutContainer id="technology" isLight={false}>
        <AboutWrapper>
          <AboutRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading lightText={true}>Technology</Heading>
                <Subtitle darkText={false}>
                  Technologies I use to build websites that can significantly
                  speed up the website development process.
                </Subtitle>
              </TextWrapper>
              <List>
                <ListItem>
                  <DiReact size="3rem" />
                  <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                      Experiece with <br />
                      React.js
                    </ListParagraph>
                  </ListContainer>
                </ListItem>
                <ListItem>
                  <DiFirebase size="3rem" />
                  <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                      Experience with <br />
                      Node and Databases
                    </ListParagraph>
                  </ListContainer>
                </ListItem>
              </List>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt="Technology" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default Technology;
