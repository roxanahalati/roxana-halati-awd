import React from 'react';
import ClassSchedule from './ClassSchedule';
import Computer from './assets/computer.svg';
import './Teaching.css'

const Teaching = ({ isMobileMenuOpen }) => {
  return (
    <div className="TeachingPageContainer" isMobileMenuOpen={isMobileMenuOpen}>
      <div className="TeachingSectionTitle">Teaching</div>
      <div className="TeachingColumnsContainer">
        <div className="TeachingColumn">
          <div style={{ display: 'flex' }}>
            <img src={Computer} />
            <p className="TeachingProgrammingTitle">Fundamentals of Programming</p>
          </div>

          <div>
            <div className='flex-div'>
              <p>Join Teams with Code: </p>
              <p className='bold-colored'>PMLCFS5</p>
            </div>

            <p>The purpose of this course is to introduce you to some basic programming notions that you will use in the future.</p>
          </div>

          <div>
            <p className='bold-colored-big'>Grading</p>

            <p className='bold-colored'>Lab: 30%</p>
            <p>Each week you will get a new assignment that is due at the following laboratory. You can turn it in up to 3 weeks late, with 1 point penalty each week. A not-delivered assignment is graded with 1. All assignment have the same weight when calculating your mark.</p>

            <p className='bold-colored'>Practical Exam: 10%</p>
            <p>You will have to take a practical exam during the course. You will receive a sample exam on Teams</p>

            <p className='bold-colored'>Exam (in the examination session): 60%</p>
            <p>Practical Exam: You will have 3 hours to solve a set of requirements on your own computer. You will have access to any resource (including internet), but communication with other students is forbidden.</p>
            <p>Theoretical Exam: You will have 2 hours to solve a set of theoretical requirements (taught during the lectures). You will not have access to any external resource.</p>
          </div>
        </div>
        <div className="TeachingColumn">
          <ClassSchedule />
        </div>
      </div>
    </div>
  );
};

export default Teaching;
