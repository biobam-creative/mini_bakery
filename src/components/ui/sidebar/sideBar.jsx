import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";
import { ProfileImage, ProfileSideBar, Welcome } from "../../styledComponents";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import styled from "styled-components";
import { sidebarData } from "./sidebarDataFile";
import SubMenu from "./subMenu";
import { userInfoContext } from "../../../store/userContext";
import { sidebarContext } from "../../../store/sidebarContext";

const SidebarNav = styled.div`
  position: fixed;
  color: #f5f5f5;
  background: #002063;
  ${(props) =>
    props.expandSidebar
      ? `width: 250px; display: flex;`
      : `width: 0; display: none;`}
  margin: 0;
  height: 100vh;
  justify-content: center;
  z-index: 10;
  transition: width 0.3s;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideBar = () => {
  const userInfo = useContext(userInfoContext);

  const { expandSidebar } = useContext(sidebarContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <SidebarNav expandSidebar={expandSidebar}>
      <SidebarWrap>
        <ProfileSideBar>
          <ProfileImage>
            <IoPersonCircle />
          </ProfileImage>
          <Welcome> Welcome {userInfo.name}</Welcome>
        </ProfileSideBar>
        {sidebarData.map((item, index) => {
          return (
            <SubMenu expandSidebar={expandSidebar} item={item} key={index} />
          );
        })}
        <SubMenu
          onClick={handleLogout}
          expandSidebar={expandSidebar}
          item={{
            title: "Log Out",
            path: "",
            icon: <IoMdExit />,
          }}
        />
      </SidebarWrap>
    </SidebarNav>
  );
};

export default SideBar;
