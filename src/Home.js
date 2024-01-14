// Home.js
import React from 'react';
import pic from './assets/cat.jpeg';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: calc(100vh - 78px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto; /* Center the containers */

  @media screen and (min-width: 768px) {
    grid-template-columns: 30% 70%;
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
  text-align: center;

  @media screen and (min-width: 768px) {
    border-radius: 0 10px 10px 0;
  }
`;

const RoundedImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const NameTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <PageContainer>
      <HomeContainer>
        <InfoContainer>
          <RoundedImage src={pic} alt="Cute Cat" />
          <NameTitle>Roxana Halati (like the city Galati but with H)</NameTitle>
          <p style={{ fontSize: '16px' }}>Assistant PhD</p>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>UBB FMI</p>
          <p style={{ fontSize: '14px', marginBottom: '5px' }}>Email: example@example.com</p>
        </InfoContainer>

        <TextContainer>
          <div>
            <p>
              Hi there! Thank you for visiting my website. Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              ldsldas
            </p>
          </div>
        </TextContainer>
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;
