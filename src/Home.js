import React from 'react';
import pic from './assets/rox.jpeg';
import styled from 'styled-components';
import Bullet from './assets/BulletPoints.svg';

const PageContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 50%;
  gap: 20px;
  width: 100%;
  justify-content: center; /* Center content horizontally */

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr; /* On smaller screens, use full width */
  }
`;

const InfoContainer = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    border-radius: 10px 0 0 10px;
  }
`;

const TextContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 0 10px 10px 0;
  }
`;

const RoundedImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const NameTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BulletPoint = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

const Home = () => {
  return (
    <PageContainer>
      <HomeContainer>
        <InfoContainer>
          <RoundedImage src={pic} alt="Cute Cat" />
          <NameTitle>Roxana Halați</NameTitle>
          <p style={{ fontSize: '12px', marginTop: -5 }}>(like the city Galați but with an H)</p>
          <p style={{ fontSize: '16px', fontWeight: 'bold', marginTop: -3 }}>Assistant PhD</p>
          <p style={{ fontSize: '14px', marginTop: -3 }}>UBB FMI</p>
          <p style={{ fontSize: '14px', marginTop: -3 }}>roxana.halati@ubbcluj.ro</p>
        </InfoContainer>

        <TextContainer>
          <Paragraph style={{ fontSize: '20px', fontWeight: '700', color: '#92073E' }}>Hi there!</Paragraph>
          <Paragraph style={{ fontSize: '16px', fontWeight: '500' }}>Thank you for visiting my page!</Paragraph>
          <Paragraph style={{ fontSize: '16px', fontWeight: '600' }}>What you'll find here:</Paragraph>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BulletPoint src={Bullet} alt="Bullet" />
            <Paragraph style={{ fontSize: '16px' }}>Info about Programming Fundamentals</Paragraph>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BulletPoint src={Bullet} alt="Bullet" />
            <Paragraph style={{ fontSize: '16px' }}>Schedule, Office Hours and Contact Info</Paragraph>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BulletPoint src={Bullet} alt="Bullet" />
            <Paragraph style={{ fontSize: '16px' }}>More info about me than you'll ever need</Paragraph>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BulletPoint src={Bullet} alt="Bullet" />
            <Paragraph style={{ fontSize: '16px' }}>Pictures of my pets</Paragraph>
          </div>
        </TextContainer>
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;
