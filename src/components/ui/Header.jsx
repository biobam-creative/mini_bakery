import React, { useContext, useState } from "react";
import logo from "../../static/logo.png";
import { logout } from "../../services/authService";
import { userInfoContext } from "../../store/userContext";
import { sidebarContext } from "../../store/sidebarContext";
import {
  LogoutButton,
  TopBar,
  HeaderRight,
  ProfileImage,
  HomeLogo,
  Welcome,
  HeaderLeft,
  ToggleButton,
} from "../styledComponents";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const userInfo = useContext(userInfoContext);
  const { expandSidebar, setExpandSidebar } = useContext(sidebarContext);

  // const [expandSidebar, setExpandSidebar] = useState(false);

  return (
    <TopBar expandSidebar={expandSidebar}>
      <HeaderLeft>
        <ToggleButton>
          <IoMdMenu
            onClick={() => {
              setExpandSidebar(!expandSidebar);
            }}
          />
        </ToggleButton>
        <HomeLogo src={logo} alt="logo" />
      </HeaderLeft>
    </TopBar>
  );
};

export default Header;
