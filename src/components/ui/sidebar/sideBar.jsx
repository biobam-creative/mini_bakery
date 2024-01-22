import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../static/logo.png";

import { logout } from "../../../services/authService";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsPersonFill,
  BsFileSpreadsheetFill,
  BsFillMortarboardFill,
  BsBoxArrowInRight,
} from "react-icons/bs";
import "./style.css";

const SideBar = ({ openSidebarToggle, OpenSidebar }) => {
  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} alt="logo" />
          <div>Freedemia Schools</div>
          {/* <BsCart3 className="icon_header" /> SHOP */}
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsPeopleFill className="icon" /> Students
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsPersonFill className="icon" /> Teachers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsFillMortarboardFill className="icon" /> Accademics
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsFileSpreadsheetFill className="icon" /> Notices
          </Link>
        </li>
        <li className="sidebar-list-item" onClick={handleLogout}>
          <Link>
            <BsBoxArrowInRight className="icon" /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
