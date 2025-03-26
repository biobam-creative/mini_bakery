import { useState, useContext } from "react";
import "./App.css";

import { sidebarContext } from "./store/sidebarContext";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EntryPage from "./components/pages/entrypage";
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

  const { expandSidebar } = useContext(sidebarContext);

  return (
    <MainContainer>
      <ComponentDisplay
        path={path}
        component={<SideBar expandSidebar={expandSidebar} />}
      />
      <EntryPage expandSidebar={expandSidebar} />
    </MainContainer>
  );
}

export default App;
