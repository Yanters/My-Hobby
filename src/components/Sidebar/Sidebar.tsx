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
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="about">Projects</SideBarLink>
          <SideBarLink to="about">Technology</SideBarLink>
          <SideBarLink to="about">Contact</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoutes to="/signin">Sign In</SideBarRoutes>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
