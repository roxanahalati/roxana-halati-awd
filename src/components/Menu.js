import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  background-color: #5A1647; /* Updated background color */
  height:40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    p {
      display: none; /* Hide the text on small screens */
    }
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  color: #FFF;

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
      background-color: #5A1647; /* Updated background color */
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
        color: rgba(255, 255, 255, 0.5); /* Set text color with opacity 0.5 */
        font-weight: bold;
        display: block; /* Ensure full width for mobile */

        &:hover {
          text-decoration: underline;
        }

        &.selected {
          color: #ffffff; /* Set text color for selected item with opacity 1 */
        }
      }
    }
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false);
    setSelectedItem(item);
  };

  return (
    <MenuContainer>
      <MenuIcon onClick={toggleMenu}>Menu</MenuIcon>
      <p style={{color:'white', fontWeight:'700', fontSize:18, marginLeft:4}}>Assistant PhD Roxana Halați</p>
      <Navigation isOpen={isOpen}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleItemClick('Home')}
              className={selectedItem === 'Home' ? 'selected' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/personal-info"
              onClick={() => handleItemClick('About Me')}
              className={selectedItem === 'About Me' ? 'selected' : ''}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/teaching"
              onClick={() => handleItemClick('Teaching')}
              className={selectedItem === 'Teaching' ? 'selected' : ''}
            >
              Teaching
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleItemClick('Contact')}
              className={selectedItem === 'Contact' ? 'selected' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Navigation>
    </MenuContainer >
  );
};

export default Menu;
