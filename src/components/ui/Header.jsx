import React, { useContext, useState } from "react";
import logo from "../../static/logo.png";
import { logout } from "../../services/authService";
import { userInfoContext } from "../../store/userContext";
import { sidebarContext } from "../../store/sidebarContext";
import {
  LogoutButton,
  TopBar,
  HeaderRight,
  HeaderIcon,
  BackButton,
  Welcome,
  Profile,
  HeaderLeft,
  ToggleButton,
  HeaderMiddle,
  LogoHeader,
  CurrentPage,
} from "../styledComponents";
import { useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdSwitch } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { BsArrow90DegLeft, BsArrowLeft } from "react-icons/bs";
import { FaAngleLeft, FaChevronLeft } from "react-icons/fa";
import { pathContext } from "../../store/pathContext";
import { FaBell } from "react-icons/fa6";
import { ImSwitch } from "react-icons/im";

const Header = ({ path }) => {
  const { name } = useContext(userInfoContext);
  const { expandSidebar, setExpandSidebar, selectedNav } =
    useContext(sidebarContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <TopBar expandSidebar={expandSidebar}>
      <HeaderLeft>
        <BackButton>
          {path === "/dashboard" ? null : (
            <FaChevronLeft
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(-1);
              }}
            />
          )}
        </BackButton>
        <ToggleButton>
          <IoMdMenu
            onClick={() => {
              setExpandSidebar(!expandSidebar);
            }}
          />
        </ToggleButton>
      </HeaderLeft>
      <HeaderMiddle>
        <LogoHeader src={logo} />
        <CurrentPage>{selectedNav}</CurrentPage>
      </HeaderMiddle>
      <HeaderRight>
        <Profile>
          <HeaderIcon onClick={() => navigate("/notifications")}>
            <FaBell size={"25px"} />
          </HeaderIcon>
          <HeaderIcon onClick={handleLogout}>
            <ImSwitch size={"25px"} />
          </HeaderIcon>
        </Profile>
      </HeaderRight>
    </TopBar>
  );
};

export default Header;
