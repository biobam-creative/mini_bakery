import React from "react";
import { BottomNav } from "../styledComponents";
import BottomNavLink from "./BottomNavLink";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoCard, IoExit } from "react-icons/io5";
import { FaHistory, FaWifi } from "react-icons/fa";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <BottomNav>
      <BottomNavLink text={"Data"} link={"/data"} icon={<FaWifi />} />
      <BottomNavLink text={"Cards"} link={"/cards"} icon={<IoCard />} />
      <BottomNavLink
        text={"Dashboard"}
        link={"/dashboard"}
        main
        icon={<BsGrid1X2Fill />}
      />
      <BottomNavLink text={"History"} link={"/history"} icon={<FaHistory />} />
      <BottomNavLink text={"Logout"} icon={<IoExit />} />
    </BottomNav>
  );
};

export default BottomNavigation;
