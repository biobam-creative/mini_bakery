import { useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "../../ui/sidebar/sideBar";
import Portal from "../dashboard/dashboard";
import Header from "../../ui/header/header";
import "./style.css";
import Dashboard from "../dashboard/dashboard";
import ComponentDisplay from "../../ComponentDisplay";
import Login from "../login/Login";
import Home from "../home/home";
import Teachers from "../teacher/teachers";
import Student from "../Student";
import { userInfoContext } from "../../../store/userContext";
import TeacherDetails from "../TeacherDetails";
import { AddTeacher } from "../AddTeacher";

function EntryPage() {
  // let userInfo = useContext(userInfoContext);

  // if (loading) {
  //   return <h1>Loading ....</h1>;
  // }

  const location = useLocation();
  let path = location.pathname;

  return (
    <div className="grid-container">
      {/* <ComponentDisplay
        path={path}
        component={<Header OpenSidebar={OpenSidebarFunction} />}
      />
      <ComponentDisplay
        path={path}
        component={
          <Sidebar
            openSidebarToggle={sidebarToggle}
            OpenSidebar={OpenSidebarFunction}
          />
        }
      /> */}
      <Routes>
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/teacherdetails" element={<TeacherDetails />} />
        <Route path="/students" element={<Student />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/portal" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default EntryPage;
