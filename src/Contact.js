import React from 'react';
import EmailIcon from './assets/email_black.svg'
import Office from './assets/office.svg'
import './Contact.css'

const Contact = ({ isMobileMenuOpen }) => {
  return (
    <div className='PageContainer' isMobileMenuOpen={isMobileMenuOpen}>
      <h2 className='SectionTitle'>Contact</h2>
      <div className="ColumnsContainer">
        <div className="Column">
          <div className='flex-div'>
          <img src={EmailIcon} />
          <p className="contact-big-text">Email</p>
          </div>
          <p><a href="mailto:roxana.halati@ubbcluj.ro">roxana.halati@ubbcluj.ro</a></p>
          <p className="contact-small-text">*Please write from your @stud.ubbcluj.ro address</p>
        </div>
        <div className="Column">
          <div className='flex-div'>
          <img src={Office} />
          <p className="contact-big-text">Office</p>
          </div>
          <p>Office 303, 3rd floor, Teodor Mihali Street no.58-60 (FSEGA building), 400591, Cluj Napoca, Romania</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
