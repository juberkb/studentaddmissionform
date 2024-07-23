import React, { useState } from "react";
import './studentform.css';

function SecondStep() {
  const [studentData, setStudentData] = useState({
    fathersName: '',
    fathersContact: '',
    fathersEmail: '',
    fathersOccupation: '',
    fathersIncome: '',
    mothersName: '',
    mothersContact: '',
   
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <br /> <h3>Step-2: Parent Details</h3><br />
      <div className="form-row">
        <div className="form-group">
       
          <input type="text" name="fathersName" value={studentData.fathersName} onChange={handleChange} required placeholder=" " />
             <label>Father's Name</label>
          <div className="bar"></div>
        </div>
        <div className="form-group">
       
          <input type="text" name="fathersContact" value={studentData.fathersContact} onChange={handleChange} required placeholder=" " />
             <label>Father's Contact</label>
          <div className="bar"></div>
        </div>
      </div>
      <div className="form-row">
       <div className="form-group">
          <input type="text" name="fathersIncome" value={studentData.fathersIncome} onChange={handleChange} required placeholder=" " />
                    <label>Father's Income</label>

          <div className="bar"></div>
        </div>
        <div className="form-group">
      
          <select name="fathersOccupation" value={studentData.fathersOccupation} onChange={handleChange} required>
            <option value="" disabled>Select Occupation</option>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Teacher">Teacher</option>
            <option value="Businessman">Businessman</option>
          </select>
              <label>Father's Occupation</label>
          <div className="bar"></div>
        </div>
      </div>
      <div className="form-row">
        
        <div className="form-group">
        
          <input type="text" name="mothersName" value={studentData.mothersName} onChange={handleChange} required placeholder=" " />
            <label>Mother's Name</label>
          <div className="bar"></div>
        </div>

        <div className="form-group motherContact">
       
          <input type="text" name="mothersContact" value={studentData.mothersContact} onChange={handleChange} required placeholder=" " />
             <label>Mother's Contact</label>
          <div className="bar"></div>
      </div>
 
       
      </div>
    </div>
  );
}

export default SecondStep;
