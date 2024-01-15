import React from 'react';
import emailIcon from './../assets/email.svg';
import githubIcon from './../assets/github.png';
import linkedinIcon from './../assets/li.png';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="FooterContainer">
      <div className="FooterLeft">&copy; 2024 Roxana Halati</div>
      <div className="FooterRight">
      <a href="mailto:roxana.halati@gmail.com">
          <img src={emailIcon} alt="Email Address" style={{height:22, width:22, marginTop:4}}/>
        </a>
        <a href="https://www.linkedin.com/in/roxanahalati" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="Linkedin Page" />
        </a>
        <a href="https://github.com/roxanahalati" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github Profile" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
