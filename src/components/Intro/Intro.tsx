import React, { useState } from "react";

import Video from "../../images/intro.mp4";
import {
  IntroContainer,
  IntroBg,
  VideoBg,
  IntroContent,
  IntroH1,
  IntroP,
  IntroBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
} from "./IntroElements";

const Intro = () => {
  const [hover, setHover] = useState<boolean>(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <IntroContainer id="intro">
      <IntroBg>
        <VideoBg loop autoPlay muted src={Video} typeof="video/mp4" />
      </IntroBg>
      <IntroContent>
        <IntroH1>Programming...</IntroH1>
        <IntroP>Some cool text about Programing ect.</IntroP>
        <IntroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            darktext={true}
            bigtext={true}
            fontbig={true}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
