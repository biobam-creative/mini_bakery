import { useState } from "react";
import "./App.css";

import UserInfoContexttProvider from "./store/userContext";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/Login";
import EntryPage from "./components/pages/entryPage/entrypage";
import Teachers from "./components/pages/teacher/teachers";
import ComponentDisplay from "./components/ComponentDisplay";
import SideBar from "./components/ui/sidebar/sideBar";
import Header from "./components/ui/header/header";

function App() {
  let location = useLocation();
  let path = location.pathname;

  const [sidebarToggle, setSidebarToggle] = useState(false);

  function OpenSidebarFunction() {
    setSidebarToggle(!sidebarToggle);
  }
  return (
    <>
      <UserInfoContexttProvider>
        {/* <ComponentDisplay
          path={path}
          component={<Header OpenSidebar={OpenSidebarFunction} />}
        /> */}
        <ComponentDisplay
          path={path}
          component={
            <SideBar
              openSidebarToggle={sidebarToggle}
              OpenSidebar={OpenSidebarFunction}
            />
          }
        />
        <EntryPage />
      </UserInfoContexttProvider>
    </>
  );
}

export default App;
