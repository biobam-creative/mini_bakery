import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const QuickCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #002063;
  padding: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: #f0f8ff;
`;

const QuickLinkText = styled.p`
  display: flex;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: bold;
`;

const QuickLink = ({ icon, text, link }) => {
  return (
    <QuickCardLink to={link}>
      {icon}
      <QuickLinkText>{text}</QuickLinkText>
    </QuickCardLink>
  );
};

export default QuickLink;
