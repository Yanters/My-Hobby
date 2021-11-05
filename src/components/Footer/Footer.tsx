import React from "react";

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
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>My Hobby</FooterLinkTitle>
                <FooterLink to="about">What Is Programming</FooterLink>
                <FooterLink to="projects">Projects</FooterLink>
                <FooterLink to="technology">Technology</FooterLink>
                <FooterLink to="contact">Contact</FooterLink>
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
