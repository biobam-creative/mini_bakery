import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../services/authService";

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  color: #000;
  ${({ main }) =>
    main
      ? `position: absolute; top: -50%; background: #7359c6; border-radius: 50%;  left: 42%; color: #fff; box-shadow: 0px 5px 8px #7359c6;`
      : `color: #7359c6;`}
`;
const LinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ main }) => (main ? `height: 40px; width: 40px; ` : ``)}
`;
const LinkText = styled.div`
  ${({ main }) => (main ? `display: none;` : ``)}
`;

const BottomNavLink = ({ icon, text, link, main }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleClick = (link) => {
    console.log(link);
    !link ? handleLogout() : navigate(link);
  };
  return (
    <LinkWrapper onClick={() => handleClick(link)} main={main} to={link}>
      <LinkIcon main={main}>{icon}</LinkIcon>
      <LinkText main={main}>{text}</LinkText>
    </LinkWrapper>
  );
};

export default BottomNavLink;
