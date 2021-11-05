import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  BottomFooter,
  BottomWrapper,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHomeHandler = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle onClick={toggleHomeHandler}>
                  My Hobby
                </FooterLinkTitle>
                <FooterLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  What Is Programming
                </FooterLink>
                <FooterLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Projects
                </FooterLink>
                <FooterLink
                  to="technology"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Technology
                </FooterLink>
                <FooterLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Contact
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <BottomFooter>
            <BottomWrapper>
              <WebsiteRights>
                My Hobby &copy; {new Date().getFullYear()} All Rights Reserved
              </WebsiteRights>
            </BottomWrapper>
          </BottomFooter>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
