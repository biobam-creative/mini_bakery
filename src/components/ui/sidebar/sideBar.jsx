import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";
import { SideBarLogo } from "../../styledComponents";

import { IoMdExit } from "react-icons/io";
import styled from "styled-components";
import { sidebarData } from "./sidebarDataFile";
import SubMenu from "./subMenu";
import { userInfoContext } from "../../../store/userContext";
import { sidebarContext } from "../../../store/sidebarContext";

import logo from "../../../static/logo.png";

const SidebarNav = styled.div`
  position: fixed;
  background: #f5f5f5;
  // border-right: 1px solid;
  ${(props) =>
    props.expandSidebar
      ? `width: 250px; display: flex;`
      : `width: 0; display: none;`}
  margin: 0 5px;
  padding: 0 5px 0 0;
  min-height: 100vh;
  justify-content: center;
  z-index: 10;
  transition: width 0.3s;
  @media (max-width: 820px) {
    display: none;
    width: 0;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideBar = () => {
  const userInfo = useContext(userInfoContext);

  const { expandSidebar } = useContext(sidebarContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.clear();
    logout();
    navigate("/login");
  };

  return (
    <SidebarNav expandSidebar={expandSidebar}>
      <SidebarWrap>
        <SideBarLogo src={logo} alt="logo" />
        {sidebarData.map((item, index) => {
          return (
            <SubMenu expandSidebar={expandSidebar} item={item} key={index} />
          );
        })}
      </SidebarWrap>
    </SidebarNav>
  );
};

export default SideBar;
