import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.light};
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${(props) => props.theme.accent};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.5rem;

      &:hover {
        color: ${(props) => props.theme.accent};
      }
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.light};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink to="/products">Products</FooterLink>
              </li>
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
              <li>
                <FooterLink to="/disclaimer">Disclaimer</FooterLink>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Customer Care</h3>
            <ul>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">Returns & Quality Guarantee</a>
              </li>
              <li>
                <a href="#">Allergen Information</a>
              </li>
              <li>
                <a href="#">Storage Instructions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#">Nigerian Community Events</a>
              </li>
              <li>
                <a href="#">Cultural Food Blog</a>
              </li>
              <li>
                <a href="#">Customer Photo Gallery</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Newsletter Signup</a>
              </li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          © 2023 Nigerian Bread Mini Bakery. All rights reserved. This website
          is for educational purposes only.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
