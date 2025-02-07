import React, { useContext } from "react";
import logo from "../../static/logo.png";
import { logout } from "../../services/authService";
import { userInfoContext } from "../../store/userContext";
import {
  LogoutButton,
  TopBar,
  HeaderRight,
  ProfileImage,
  HomeLogo,
  Welcome,
} from "../styledComponents";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userInfo = useContext(userInfoContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <TopBar>
      <HomeLogo src={logo} alt="logo" />
      <HeaderRight>
        <Welcome>Welcome, {userInfo.name}</Welcome>
        <ProfileImage src={"http://127.0.0.1:8000" + userInfo.photo} />
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      </HeaderRight>
    </TopBar>
  );
};

export default Header;
