import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ComponentDisplay from "../ComponentDisplay";
import SideBar from "../ui/sidebar/sideBar";
import { BottomNav, ContentContainer } from "../styledComponents";

import { sidebarContext } from "../../store/sidebarContext";
import { userInfoContext } from "../../store/userContext";
import Header from "../ui/Header";
import BottomNavigation from "../ui/BottomNavigation";

const MainContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  margin: 0;
  transition: margin-left 0.3s;
`;

const ComponentGroup = ({ children }) => {
  const location = useLocation();
  let path = location.pathname;

  //   useEffect(() => {
  //     function userInfo() {
  //       const userInfo = useContext(userInfoContext);
  //     }
  //     userInfo();
  //   });

  const { expandSidebar, setExpandSidebar } = useContext(sidebarContext);

  return (
    <MainContainer>
      <ComponentDisplay
        path={path}
        component={<SideBar expandSidebar={expandSidebar} />}
      />
      <EntryContainer expandSidebar={expandSidebar}>
        <ContentContainer expandSidebar={expandSidebar}>
          <ComponentDisplay
            path={path}
            component={<Header path={path} expandSidebar={expandSidebar} />}
          />
          <ComponentDisplay
            path={path}
            component={<BottomNavigation expandSidebar={expandSidebar} />}
          />

          {children}
        </ContentContainer>
      </EntryContainer>
    </MainContainer>
  );
};

export default ComponentGroup;
