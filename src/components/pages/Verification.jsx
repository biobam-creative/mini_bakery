import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkText, PageWrapper, SectionBox } from "../styledComponents";
import { sidebarContext } from "../../store/sidebarContext";

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #7359c6;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Verification = () => {
  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);

  return (
    <PageWrapper place="center">
      <SectionBox>
        <Text>
          We have sent an email to you to reset your passwor and{" "}
          <LoginLink to="/login">Login</LoginLink>
        </Text>
      </SectionBox>
    </PageWrapper>
  );
};

export default Verification;
