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
import { IoMdMenu } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { BsArrow90DegLeft, BsArrowLeft } from "react-icons/bs";
import { FaAngleLeft, FaChevronLeft } from "react-icons/fa";
import { pathContext } from "../../store/pathContext";

const Header = ({ path }) => {
  const { name } = useContext(userInfoContext);
  const { expandSidebar, setExpandSidebar, selectedNav } =
    useContext(sidebarContext);

  // const [expandSidebar, setExpandSidebar] = useState(false);
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
          <ProfileImage>
            <IoPersonCircle />
          </ProfileImage>
        </Profile>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </HeaderRight>
    </TopBar>
  );
};

export default Header;
