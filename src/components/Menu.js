// Menu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  background-color: red;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;

  @media (min-width: 769px) {
    display: none; // Hide the icon on desktop
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    @media (max-width: 768px) {
      display: ${(props) => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 40px; /* Adjust based on your menu bar height */
      left: 0;
      background-color: red;
      width: 100%;
      z-index: 999;
      padding: 10px; /* Adjust padding */
    }

    li {
      margin-right: 15px;

      @media (max-width: 768px) {
        margin-right: 0; /* Remove margin for mobile */
        margin-bottom: 10px;
      }

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        display: block; /* Ensure full width for mobile */

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <MenuContainer>
      <MenuIcon onClick={toggleMenu}>Menu</MenuIcon>
      <Navigation isOpen={isOpen}>
        <ul>
          <li>
            <Link to="/" onClick={handleItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/personal-info" onClick={handleItemClick}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/teaching" onClick={handleItemClick}>
              Teaching
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </Navigation>
    </MenuContainer>
  );
};

export default Menu;
