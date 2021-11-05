import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoutes,
} from "./SidebarElements";

const Sidebar: React.FC<{ isOpen: boolean; toggle: () => void }> = (props) => {
  return (
    <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink
            onClick={props.toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Projects
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="technologies"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Technology
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contact
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoutes to="/signin">Sign In</SideBarRoutes>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
