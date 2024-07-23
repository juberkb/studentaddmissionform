// Home.js
import React, { useState } from 'react';
import "./studentform.css"
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import StudentForm from "./Studentform";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const steps = ['Student Information', 'Parent Details', 'Guardian Details'];

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {}
  });

  const handleNext = (data) => {
    setFormData({
      ...formData,
      [`step${currentPage + 1}Data`]: data
    });
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    console.log('Final form data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <Stepper activeStep={currentPage} className="stepper">
        {steps.map((label, index) => (
          <Step key={label} completed={currentPage > index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="form-steps">
        {currentPage === 0 && (
          <StudentForm onNext={handleNext} />
        )}
        {currentPage === 1 && (
          <SecondStep onNext={handleNext} onPrev={handlePrev} />
        )}
        {currentPage === 2 && (
          <ThirdStep data={formData.step3Data} onPrev={handlePrev} onSubmit={handleSubmit} />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        {currentPage !== 0 && (
          <Button variant="contained" onClick={handlePrev}>Previous</Button>
        )}
        {currentPage !== 2 ? (
          <Button variant="contained" onClick={() => handleNext({})}>Next</Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
}

export default Home;
