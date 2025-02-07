import { useState } from "react";
import "./App.css";

import UserInfoContexttProvider from "./store/userContext";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EntryPage from "./components/pages/entryPage/entrypage";
import ComponentDisplay from "./components/ComponentDisplay";
import SideBar from "./components/ui/sidebar/sideBar";
import styled from "styled-components";
import Header from "./components/ui/Header";
import { PageWrapper } from "./components/styledComponents";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;

function App() {
  let location = useLocation();
  let path = location.pathname;

  const [sidebarToggle, setSidebarToggle] = useState(false);

  function OpenSidebarFunction() {
    setSidebarToggle(!sidebarToggle);
  }

  return (
    <UserInfoContexttProvider>
      {/* <PageWrapper> */}
      <ComponentDisplay path={path} component={<Header />} />
      <MainContainer>
        <ComponentDisplay
          path={path}
          component={
            <SideBar
            // openSidebarToggle={sidebarToggle}
            // OpenSidebar={OpenSidebarFunction}
            />
          }
        />
        <EntryPage />
      </MainContainer>
      {/* </PageWrapper> */}
    </UserInfoContexttProvider>
  );
}

export default App;
