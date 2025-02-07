import { useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Portal from "../dashboard/dashboard";
import "./style.css";
import Dashboard from "../dashboard/dashboard";
import ComponentDisplay from "../../ComponentDisplay";
import Login from "../Login";
import Home from "../home/home";
import Teachers from "../teacher/teachers";
import Student from "../Student";
import { userInfoContext } from "../../../store/userContext";
import TeacherDetails from "../TeacherDetails";
import { AddTeacher } from "../AddTeacher";
import styled from "styled-components";
import { PageWrapper } from "../../styledComponents";

const EntryContainer = styled.div`
  // display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
`;

function EntryPage() {
  // let userInfo = useContext(userInfoContext);

  // if (loading) {
  //   return <h1>Loading ....</h1>;
  // }

  const location = useLocation();
  let path = location.pathname;

  return (
    <Routes>
      <Route path="/addteacher" element={<AddTeacher />} />
      <Route path="/teacherdetails" element={<TeacherDetails />} />
      <Route path="/students" element={<Student />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/portal" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default EntryPage;
