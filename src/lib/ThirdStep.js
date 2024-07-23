import React, { useState } from "react";
import './studentform.css';

function ThirdStep() {
  const [studentData, setStudentData] = useState({
    guardiansName: '',
    guardiansContact: '',
    guardiansEmail: '',
    guardiansAddress: ''
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h3>Step-3: Guardian Details</h3><br />
      <div className="form-group">
        <input type="text" name="guardiansName" value={studentData.guardiansName} onChange={handleChange} required placeholder=" " />
        <label>Guardian's Name</label>
        <div className="bar"></div>
      </div>
      <div className="form-group">
        <input type="text" name="guardiansContact" value={studentData.guardiansContact} onChange={handleChange} required placeholder=" " />
        <label>Guardian's Contact</label>
        <div className="bar"></div>
      </div>
      <div className="form-group">
        <input type="email" name="guardiansEmail" value={studentData.guardiansEmail} onChange={handleChange} required placeholder=" " />
        <label>Guardian's Email</label>
        <div className="bar"></div>
      </div>
      <div className="form-group">
        <input type="text" name="guardiansAddress" value={studentData.guardiansAddress} onChange={handleChange} required placeholder=" " />
        <label>Corresponding Address</label>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default ThirdStep;
