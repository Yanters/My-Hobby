import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import TimeSpend from "../Alerts/TimeSpend";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import jquery from "jquery";

// this helps TypeScript to understand jQuery best !!!  otherwise It will confused .
const $: JQueryStatic = jquery;

const Navbar: React.FC<{ toggle: () => void }> = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [timeLive, setTimeLive] = useState(0);
  const changeNavHandler = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavHandler);
  }, []);

  const toggleHomeHandler = () => {
    scroll.scrollToTop();
  };

  const toggleInfo = () => {
    $(".alert").addClass("show");
    $(".alert").removeClass("hide");
    $(".alert").addClass("showAlert");
    setTimeout(function () {
      $(".alert").removeClass("show");
      $(".alert").addClass("hide");
    }, 5000);
    $(".close-btn").click(function () {
      $(".alert").removeClass("show");
      $(".alert").addClass("hide");
    });
    console.log("done!@#");
    const firstVisitTimeStorage = sessionStorage.getItem("firstVisitTime");
    const firstVisitTime = firstVisitTimeStorage
      ? parseInt(firstVisitTimeStorage)
      : 0;
    var time = Math.round((Date.now() - firstVisitTime) / 1000);
    setTimeLive(time);
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHomeHandler}>
            My Hobby
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="technology"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Technology
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to=""
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                id="timer"
                onClick={toggleInfo}
              >
                Info
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <TimeSpend time={timeLive} />
    </>
  );
};

export default Navbar;
