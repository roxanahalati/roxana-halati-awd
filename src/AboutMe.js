import React from 'react';
import EducationIcon from './assets/education.svg'
import HobbyIcon from './assets/hobby.svg'
import TeachingIcon from './assets/teaching.svg'
import Bullet from './assets/BulletPoints.svg';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='AboutPageContainer'>
      <h2 className='AboutSectionTitle'>About Me</h2>
      <div className='AboutColumnsContainer'>
        <div className='AboutColumn'>
          <div className='flex-dis'>
            <img src={EducationIcon} />
            <p className="section-title">Education</p>
          </div>
          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>PhD. - Software Engineering</p>
            </div>
            <p className="special-text">Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>M.A. - Software Engineering</p>
            </div>
            <p className="special-text">Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>B.S. - Computer Science</p>
            </div>
            <p className="special-text">Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>B.A. - Communication and Public Relations</p>
            </div>
            <p className="special-text">Faculty of Political Science, Administration and Communication, BBU</p>
          </div>

        </div>
        <div className='AboutColumn'>
          <div className='flex-dis'>
            <img src={TeachingIcon} />
            <p className="section-title">Teaching & Work</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>Teaching Assistant - Fundamentals of Programming</p>
            </div>
            <p className="special-text">Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>React Native Developer</p>
            </div>
            <p className="special-text">NexTech Innovations</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>React Native Intern</p>
            </div>
            <p className="special-text">RebelDot</p>
          </div>
        </div>

        <div className='AboutColumn'>
          <div className='flex-dis'>
            <img src={HobbyIcon} />
            <p className="section-title">Hobbies</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='BulletPoint' src={Bullet} alt="Bullet" />
              <p>Painting</p>
            </div>
            <p className="special-text">Poorly, while making a mess</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>Ballet</p>
            </div>
            <p className="special-text">Still can't stand on my tippy-toes</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>Entrepreneurship</p>
            </div>
            <p className="special-text">Have no idea what I'm doing</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>Embroidery</p>
            </div>
            <p className="special-text">Channeling my inner grandma</p>
          </div>

          <div>
            <div className='title-text'>
              <img className='AboutBulletPoint' src={Bullet} alt="Bullet" />
              <p>Petting animals</p>
            </div>
            <p className="special-text">Can't survive the cuteness</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AboutMe;
