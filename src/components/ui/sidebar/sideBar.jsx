import { useState, useContext } from "react";
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
  margin-left: 0.5rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffc107;
`;

const SidebarNav = styled.nav`
  background: #1b5e20;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0.5rem;
`;

const LogoutButton = styled.button`
  color: white;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

const HeaderLeft = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
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

const Welcome = styled.span`
  font-size: 14px;
  color: #ffc107;
`;

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const userInfo = useContext(userInfoContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Header>
        <HeaderLeft>
          <Brand>
            <Logo src={logo} />
            Freedemia
          </Brand>
          <ToggleIcon to="#">
            <FaBars onClick={showSidebar} />
          </ToggleIcon>
        </HeaderLeft>

        <HeaderRight>
          <Welcome>Welcome {userInfo.name}</Welcome>
          <ProfileImage src={"http://127.0.0.1:8000" + userInfo.photo} />
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </HeaderRight>
      </Header>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <SideBarTop>
            <Brand>
              <Logo src={logo} />
            </Brand>
            <ToggleIcon>
              <AiOutlineClose onClick={showSidebar} />
            </ToggleIcon>
          </SideBarTop>
          {userInfo.isAdmin
            ? AdminSidbarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })
            : userInfo.isStaff === "true"
            ? TeacherSidbarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })
            : StudentSidbarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
          {/* {AdminSidbarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })} */}
          {/* {} */}
        </SidebarWrap>
      </SidebarNav>
    </>
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
