import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Menu.css'


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
    <div className='menuContainer'>
      <div className='menuIcon' onClick={toggleMenu}>Menu</div>
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
              to="/teaching"
              onClick={() => handleItemClick('Teaching')}
              className={selectedItem === 'Teaching' ? 'selected' : ''}
            >
              Teaching
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
              to="/happiness"
              onClick={() => handleItemClick('Happiness')}
              className={selectedItem === 'Happiness' ? 'selected' : ''}
            >
              Destressify
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
    </div>
  );
};

export default Menu;
