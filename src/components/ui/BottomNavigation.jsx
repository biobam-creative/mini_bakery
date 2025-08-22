import React from "react";
import { BottomNav } from "../styledComponents";
import BottomNavLink from "./BottomNavLink";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoCard, IoExit } from "react-icons/io5";
import { FaHistory, FaWifi } from "react-icons/fa";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <BottomNav>
      <BottomNavLink
        text={"Data"}
        link={"/data"}
        icon={<FaWifi size={"20px"} />}
      />
      <BottomNavLink
        text={"Cards"}
        link={"/cards"}
        icon={<IoCard size={"20px"} />}
      />
      <BottomNavLink
        text={"Dashboard"}
        link={"/dashboard"}
        main
        icon={<BsGrid1X2Fill size={"20px"} />}
      />
      <BottomNavLink
        text={"History"}
        link={"/history"}
        icon={<FaHistory size={"20px"} />}
      />
      <BottomNavLink
        text={"Settings"}
        link={"/settings"}
        icon={<FaGear size={"20px"} />}
      />
    </BottomNav>
  );
};

export default BottomNavigation;
