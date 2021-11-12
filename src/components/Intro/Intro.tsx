import React, { useState } from "react";

import { ReactTypical } from "@deadcoder0904/react-typical";
import Video from "../../images/intro.mp4";
import {
  IntroContainer,
  IntroBg,
  VideoBg,
  IntroContent,
  IntroH1,
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
        <IntroH1>
          My Hobby is...
          <ReactTypical
            steps={[
              "Programming",
              6000,
              "Coding",
              6000,
              "Making Fun Stuff",
              6000,
              "Being Creative",
              6000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </IntroH1>
        <IntroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            darktext={true}
            bigtext={true}
            fontbig={true}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
