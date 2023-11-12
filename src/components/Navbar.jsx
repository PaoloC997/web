import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 1000; /* Set a high z-index to ensure the navbar is on top */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black; /* Set color for the logo */
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00; /* Set color for hover effect */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>YourLogo</Logo>
      <LinksContainer>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
