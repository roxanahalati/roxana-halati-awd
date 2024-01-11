// Contact.js
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: calc(100vh - 78px);
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
  height: 50%; /* Set height to 50% of the screen height */
  width: 100%; /* Take full width on small screens */
  align-items: center; /* Center align columns horizontally */

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Display columns in a row on larger screens */
    justify-content: center; /* Center align columns horizontally on larger screens */
  }
`;

const Column = styled.div`
  flex: 1; /* Adjust to make the columns take less width on small screens */
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px; /* Set a maximum width for the columns */

  @media screen and (max-width: 768px) {
    width: 100%; /* Take full width on smaller screens */
  }
`;

const Contact = ({ isMobileMenuOpen }) => {
  return (
    <PageContainer isMobileMenuOpen={isMobileMenuOpen}>
      <SectionTitle>Contact</SectionTitle>
      <ColumnsContainer>
        <Column>
          <p>Placeholder text for the first column</p>
        </Column>
        <Column>
          <p>Placeholder text for the second column</p>
        </Column>
        <Column>
          <p>Placeholder text for the third column</p>
        </Column>
      </ColumnsContainer>
    </PageContainer>
  );
};

export default Contact;
