// Teaching.js
import React from 'react';
import styled from 'styled-components';
import ClassSchedule from './ClassSchedule';
import Computer from './assets/computer.svg';

const PageContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'hidden' : 'auto')}; /* Prevent scrolling past footer on small screens */
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
  width: 100%; /* Take full width on small screens */
  align-items: center; /* Center align columns horizontally */
  justify-content: center; /* Center align columns vertically */

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Display columns in a row on larger screens */
  }
`;

const Column = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;

  /* Set a maximum height and enable scrolling */
  max-height: 500px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Teaching = ({ isMobileMenuOpen }) => {
  return (
    <PageContainer isMobileMenuOpen={isMobileMenuOpen}>
      <SectionTitle>Teaching</SectionTitle>
      <ColumnsContainer>
        <Column>
          <div style={{ display: 'flex' }}>
            <img src={Computer} />
            <p>Fundamentals of Programming</p>
          </div>

          <div>
            <p>Join Teams with Code: PLMCSF5</p>

            <p>The purpose of this course is to introduce you to some basic programming notions that you will use in the future.</p>
          </div>

          <div>
            <p>Grading:</p>

            <p>Lab: 30%</p>
            <p>Each week you will get a new assignment that is due at the following laboratory. You can turn it in up to 3 weeks late, with 1 point penalty each week. A not-delivered assignment is graded with 1. All assignment have the same weight when calculating your mark.</p>

            <p>Practical Exam: 10%</p>
            <p>You will have to take a practical exam during the course. You will receive a sample exam on Teams</p>

            <p>Exam (in the examination session): 60%</p>
            <p>Practical Exam: You will have 3 hours to solve a set of requirements on your own computer. You will have access to any resource (including internet), but communication with other students is forbidden.</p>
            <p>Theoretical Exam: You will have 2 hours to solve a set of theoretical requirements (taught during the lectures). You will not have access to any external resource.</p>
          </div>
        </Column>
        <Column>
          <ClassSchedule />
        </Column>
      </ColumnsContainer>
    </PageContainer>
  );
};

export default Teaching;
