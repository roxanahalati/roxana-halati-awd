import React from 'react';
import pic from './assets/rox.jpeg';
import Bullet from './assets/BulletPoints.svg';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="HomePageContainer">
      <div className="HomeContainer">
        <div className="InfoContainer">
          <img className="RoundedImage" src={pic} alt="Cute Cat" />
          <p className="NameTitle">Roxana Halați</p>
          <p className='detail1'>(like the city Galați but with an H)</p>
          <p className='detail2'>Assistant PhD</p>
          <p className='detail3'>UBB FMI</p>
          <p className='detail3'>roxana.halati@ubbcluj.ro</p>
        </div>

        <div className="TextContainer">
          <p className="Paragraph salutation">Hi there!</p>
          <p className="Paragraph important-text">Thank you for visiting my page!</p>
          <p className="Paragraph important-text">What you'll find here:</p>

          <div>
            <div className='flex-center'>
              <img className="BulletPoint" src={Bullet} alt="Bullet" />
              <p className="Paragraph">
                <Link to="/teaching">Info about Programming Fundamentals</Link>
              </p>
            </div>

            <div className='flex-center'>
              <img className="BulletPoint" src={Bullet} alt="Bullet" />
              <p className="Paragraph">
                <Link to="/contact">Schedule, Office Hours and Contact Info</Link>
              </p>
            </div>

            <div className='flex-center'>
              <img className="BulletPoint" src={Bullet} alt="Bullet" />
              <p className="Paragraph">
                <Link to="/personal-info">More info about me than you'll ever need</Link>
              </p>
            </div>

            <div className='flex-center'>
              <img className="BulletPoint" src={Bullet} alt="Bullet" />
              <p className="Paragraph">
                <Link to="/happiness">Pictures of my pets</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
