import React from "react";
import { Button, ButtonLink } from "../Intro/IntroElements";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./AboutElements";

const About: React.FC<{
  id: string;
  isLight: boolean;
  lightText: boolean;
  ligthTextDescription: boolean;
  topLine: string;
  headLine: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: any;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
  buttonLink: boolean;
}> = (props) => {
  return (
    <>
      <AboutContainer id={props.id} isLight={props.isLight}>
        <AboutWrapper>
          <AboutRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading lightText={props.lightText}>{props.headLine}</Heading>
                <Subtitle darkText={props.darkText}>
                  {props.description}
                </Subtitle>
                <BtnWrap>
                  {props.buttonLink ? (
                    <ButtonLink
                      primary={props.primary ? true : false}
                      darktext={!props.darkText}
                      bigtext={true}
                      fontbig={false}
                      to="projects"
                    >
                      {props.buttonLabel}
                    </ButtonLink>
                  ) : (
                    <Button
                      primary={props.primary ? true : false}
                      darktext={!props.darkText}
                      bigtext={true}
                      fontbig={false}
                      to="projects"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                    >
                      {props.buttonLabel}
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
