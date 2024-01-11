// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLeft = styled.div`
  flex: 1;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    margin-left: 10px;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>&copy; 2024 Your Company Name</FooterLeft>
      <FooterRight>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
