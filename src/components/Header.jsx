import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.light};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${(props) => props.theme.shadow};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;

  span {
    color: ${(props) => props.theme.accent};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: ${(props) => (props.mobileOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.primary};
    flex-direction: column;
    padding: 1rem;
    box-shadow: ${(props) => props.theme.shadow};
  }
`;

const NavItem = styled.li`
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.light};
  font-size: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Logo>
            <a href="#" onClick={handleLogoClick}>
              Nigerian <span>Bread</span>
            </a>
          </Logo>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </MobileMenuButton>
          <NavMenu mobileOpen={mobileMenuOpen}>
            <NavItem>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </NavItem>
          <NavMenu>
          </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
