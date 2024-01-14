import React from 'react';
import styled from 'styled-components';
import EducationIcon from './assets/education.svg'
import HobbyIcon from './assets/hobby.svg'
import TeachingIcon from './assets/teaching.svg'
import Bullet from './assets/BulletPoints.svg';

const PageContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Display columns in a column on small screens */
  gap: 20px; /* Add space between columns */
  height: 80%;
  width: 90%;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Display columns in a row on larger screens */
  }
`;

const Column = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;

  &:hover {
    background-color: #92073e;
    color: #fff;
  }
`;

const BulletPoint = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;



const AboutMe = () => {
  return (
    <PageContainer>
      <SectionTitle>About Me</SectionTitle>
      <ColumnsContainer>
        <Column>
          <div style={{ display: 'flex' }}>
            <img src={EducationIcon} />
            <p style={{ marginLeft: 8, fontSize: 20, fontWeight: 'bold' }}>Education</p>
          </div>
          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>PhD. - Software Engineering</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>M.A. - Software Engineering</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>B.S. - Computer Science</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>B.A. - Communication and Public Relations</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Faculty of Political Science, Administration and Communication, BBU</p>
          </div>

        </Column>
        <Column>
          <div style={{ display: 'flex' }}>
            <img src={TeachingIcon} />
            <p style={{ marginLeft: 8, fontSize: 20, fontWeight: 'bold' }}>Teaching & Work</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>Teaching Assistant - Fundamentals of Programming</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Faculty of Mathematics and Computer Science, BBU</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>React Native Developer</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>NexTech Innovations</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>React Native Intern</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>RebelDot</p>
          </div>
        </Column>

        <Column>
          <div style={{ display: 'flex' }}>
            <img src={HobbyIcon} />
            <p style={{ marginLeft: 8, fontSize: 20, fontWeight: 'bold' }}>Hobbies</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>Painting</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Poorly, while making a mess</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>Ballet</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Still can't stand on my tippy-toes</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>Entrepreneurship</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Have no idea what I'm doing</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>Embroidery</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Channeling my inner grandma</p>
          </div>

          <div>
            <div style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
              <BulletPoint src={Bullet} alt="Bullet" />
              <p>Petting animals</p>
            </div>
            <p style={{ fontSize: '14px', marginTop: -8 }}>Can't survive the cuteness</p>
          </div>


        </Column>
      </ColumnsContainer>
    </PageContainer>
  );
};

export default AboutMe;
