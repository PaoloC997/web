import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useLanguage } from '../../context/LanguageContext';
import { navBarText } from '../../data/data';

const NavbarContainer = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 1000;
  border-bottom: ${({ isHome }) => (isHome ? 'none' : '1px solid lightgray')};
`;

const Logo = styled.img`
  width: 9vw;
  filter: ${({ isHome }) => (isHome ? 'invert(0%)' : 'invert(100%)')};
  @media (max-width: 768px) {
    width: 25vw;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 4.6rem;

  @media (max-width: 768px) {
    transform: ${({ showMenu }) => (showMenu ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.09s ease-in;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 200px;
    height: 100%;
    padding: 2rem;
    gap: 40px;
    color: black;

    ${({ showMenu }) =>
      showMenu &&
      css`
        transform: translateX(0);
      `}
  }
`;

const UnderlineEffect = css`
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px; 
    bottom: 0;
    left: 50%;
    background-color: currentColor;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:hover:before {
    width: 100%;
    left: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ isHome }) => (isHome ? 'white' : 'black')};
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1.5rem;
  letter-spacing: 2px;
  position: relative;

  ${UnderlineEffect}

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    color: black;
  }
`;

const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;
  color: ${({ isHome }) => (isHome ? 'white' : 'black')};
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    color: #FF3A00;
  }

  @media (max-width: 768px) {
    margin: 0;
    color: black;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;

  ${LanguageDropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.a`
  color: ${({ isHome }) => (isHome ? 'white' : 'black')};
  padding: 12px 16px;
  font-size: 1.2rem;
  text-decoration: none;
  display: block;
  background-color: white;
  color:black;
  width:50%;
  border: 1px solid lightgray;
  transition: background-color 0.8s;
  @media (max-width: 768px) {
    color: black;
  }
  &:hover {
    color: #FF3A00;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  color: white;
  @media (max-width: 768px) {
    display: block;
    filter: ${({ isHome }) => (isHome ? 'invert(0%)' : 'invert(100%)')};
    font-size: 2rem;
    padding-right: 2rem;
  }
`;

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isHome =
  location.pathname === '/' ||
  location.pathname === '/services' ||
  location.pathname.startsWith('/services')


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavbarContainer isHome={isHome} className="light-font">
      <Link to="/">
        <Logo src="/Logo2.svg" isHome={isHome} />
      </Link>
      <LinksContainer showMenu={showMenu}>
        <StyledLink to="/about" isHome={isHome}>
          {navBarText[0].about[language]}
        </StyledLink>
        <StyledLink to="/projects" isHome={isHome}>
          {navBarText[1].projects[language]}
        </StyledLink>
        <StyledLink to="/services" isHome={isHome}>
          {navBarText[2].services[language]}
        </StyledLink>
        <StyledLink to="/contact" isHome={isHome}>
          {navBarText[3].contact[language]}
        </StyledLink>
        <LanguageDropdown isHome={isHome}>
          {navBarText[4].lang[language]}
          <DropdownContent>
            <DropdownItem isHome={isHome} onClick={() => changeLanguage('en')}>
              ENGLISH
            </DropdownItem>
            <DropdownItem isHome={isHome} onClick={() => changeLanguage('es')}>
              ESPAÑOL
            </DropdownItem>
            <DropdownItem isHome={isHome} onClick={() => changeLanguage('cat')}>
              CATALÀ
            </DropdownItem>
            <DropdownItem isHome={isHome} onClick={() => changeLanguage('ger')}>
              DEUTSCH
            </DropdownItem>
          </DropdownContent>
        </LanguageDropdown>
      </LinksContainer>
      <BurgerMenu onClick={toggleMenu} isHome={isHome}>
        ☰
      </BurgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
