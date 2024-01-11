// // PersonalInfo.js
// import React from 'react';

// const PersonalInfo = () => {
//   return(
//     <div>
//         <h2>About Me!</h2>

//         <div>
//             <h3>Education</h3>
//             <p>UBB FMI</p>
//             <p>Master</p>
//             <p>UBB FMI</p>
//             <p>Faculta de info</p>
//             <p>UBB FSPAC</p>
//             <p>Faculta de pR</p>
//         </div>

//         <div>
//             <h3>Teaching</h3>
//             <p>Assisten Teacher Ceva Materie</p>
//             <p>Bullshitereala</p>
//         </div>

//         <div>
//             <h3>Work</h3>
//             <p>Fake Company</p>
//             <p>Work as whatever I want</p>
//         </div>

//         <div>
//             <h3>Hibbies</h3>
//             <p>I love art but I'm not a very good artist. Here are some paintings and stuff</p>
//         </div>
//     </div>
//   )
// };

// export default PersonalInfo;

// AboutMe.js

// AboutMe.js
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: calc(100vh - 78px);
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
`;

const AboutMe = () => {
  return (
    <PageContainer>
      <SectionTitle>About Me</SectionTitle>
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

export default AboutMe;
