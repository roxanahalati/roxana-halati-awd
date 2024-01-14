import React from 'react';
import styled from 'styled-components';
import emailIcon from './../assets/email.svg';
import githubIcon from './../assets/github.svg';
import linkedinIcon from './../assets/linkedin.svg';

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
    display: flex;
    align-items: center; /* Center the text and icon vertically */
  }

  img {
    width: 20px; /* Set width */
    height: 20px; /* Set height */
    margin-right: 5px; /* Add some margin between text and icon */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>&copy; 2024 Roxana Halati</FooterLeft>
      <FooterRight>
      <a href="mailto:roxana.halati@gmail.com">
          <img src={emailIcon} alt="Email Address" />
        </a>
        <a href="https://www.linkedin.com/in/roxanahalati" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="Linkedin Page" />
        </a>
        <a href="https://github.com/roxanahalati" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github Profile" />
        </a>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
