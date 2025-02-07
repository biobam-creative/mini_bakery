import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../static/logo.png";
import { logout } from "../../../services/authService";
import { TopBar, HomeLogo } from "../../styledComponents";
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
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import styled from "styled-components";
import {
  AdminSidbarData,
  TeacherSidbarData,
  StudentSidbarData,
} from "./sidebarDataFile";
import SubMenu from "./subMenu";
import { userInfoContext } from "../../../store/userContext";

const Header = styled.div`
  background: #1b5e20;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
  align-items: center;
`;

const ToggleIcon = styled(Link)`
  position: absolute;
  background: #1b5e20;
  top: 50vh;
  left: 35px;
  border: 1.5px solid white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0 0.5);
  border-radius: 50%;
  padding: 5px;
  // margin-left: 1.5rem;
  font-size: 1.5rem;
  // height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffc107;
`;

const SidebarNav = styled.div`
  color: #f5f5f5;
  background: #1b5e20;
  display: flex;
  ${(props) => (props.bigSidebar ? `width: 250px;` : `width: 50px;`)}
  margin: 0;
  height: 100vh;
  justify-content: center;
  left: 0;
  transition: 350ms;
  // &:hover {
  //    width: 250px;
  // }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Brand = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 15px;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const SideBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

const Logo = styled.img`
  height: 40px;
`;

const SideBar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  const userInfo = useContext(userInfoContext);

  const showSidebar = () => {
    console.log(bigSidebar);
    setBigSidebar(!bigSidebar);
  };

  return (
    <SidebarNav
      bigSidebar={expandSidebar}
      onMouseEnter={() => setExpandSidebar(true)}
      onMouseLeave={() => setExpandSidebar(false)}
    >
      <SidebarWrap>
        {userInfo.isAdmin === "true"
          ? AdminSidbarData.map((item, index) => {
              return (
                <SubMenu bigSidebar={expandSidebar} item={item} key={index} />
              );
            })
          : userInfo.isStaff === "true"
          ? TeacherSidbarData.map((item, index) => {
              return (
                <SubMenu bigSidebar={expandSidebar} item={item} key={index} />
              );
            })
          : StudentSidbarData.map((item, index) => {
              return (
                <SubMenu bigSidebar={expandSidebar} item={item} key={index} />
              );
            })}
        {/* {AdminSidbarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })} */}
        {/* {} */}
      </SidebarWrap>
    </SidebarNav>
  );
};

export default SideBar;

// const [sidebar, setSidebar] = useState(false);

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <img src={logo} alt="logo" />
//           <div>Freedemia Schools</div>
//           {/* <BsCart3 className="icon_header" /> SHOP */}
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <Link to="/portal">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </Link>
//         </li>
//         <li className="sidebar-list-item">
//           <Link to="">
//             <BsPeopleFill className="icon" /> Students
//           </Link>
//         </li>
//         <li className="sidebar-list-item">
//           <Link to="/teachers">
//             <BsPersonFill className="icon" /> Teachers
//           </Link>
//         </li>
//         <li className="sidebar-list-item">
//           <Link to="">
//             <BsFillMortarboardFill className="icon" /> Accademics
//           </Link>
//         </li>
//         <li className="sidebar-list-item">
//           <Link to="">
//             <BsFileSpreadsheetFill className="icon" /> Notices
//           </Link>
//         </li>
//         <li className="sidebar-list-item" onClick={handleLogout}>
//           <Link>
//             <BsBoxArrowInRight className="icon" /> Logout
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
