import React, { useContext, useEffect, useState } from "react";
import { userInfoContext } from "../../../store/userContext";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "./style.css";

function Header({ OpenSidebar }) {
  const userInfo = useContext(userInfoContext);

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsFillEnvelopeFill className="icon" />
      </div>
      <div className="header-right">
        <span>Welcome {userInfo["name"]}</span>
        <BsFillBellFill className="icon" />

        <BsPersonCircle className="icon" />
        <img
          className="header-picture icon"
          src={"http://127.0.0.1:8000" + userInfo["photo"]}
          alt="profile picture"
        />
      </div>
    </header>
  );
}

export default Header;
