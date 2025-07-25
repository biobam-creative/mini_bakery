import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { sidebarContext } from "../../store/sidebarContext";

const QuickCardLink = styled(Link)`
  display: flex;
  // flex: 1;
  flex-direction: column;
  text-decoration: none;
  color: #7359c6;
  padding: 5px;
  // margin: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 60px;
  // background-color: rgb(211, 211, 211);
`;

const QuickLinkText = styled.p`
  display: flex;
  text-align: center;
  margin-top: 4px;
  font-size: 0.7rem;
  font-weight: bold;
`;

const QuickLinkIcon = styled.i`
  background: rgb(211, 211, 211);
  padding: 5px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuickLink = ({ icon, text, link }) => {
  const { setSelectedNav } = useContext(sidebarContext);
  return (
    <QuickCardLink onClick={() => setSelectedNav(text)} to={link}>
      <QuickLinkIcon>{icon}</QuickLinkIcon>
      <QuickLinkText>{text}</QuickLinkText>
    </QuickCardLink>
  );
};

export default QuickLink;
