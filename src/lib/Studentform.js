import React, { useState } from 'react';
import './studentform.css';
import studentpic from "./logo512.png"

const StudentForm = ({ onNext }) => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    mobileNo: '',
    address: '',
    admissionNo: '',
    admissionDate: '',
    srNo: '',
    openingAmount: '',
    fathersName: '',
    mothersName: '',
    alternativeNo: '',
    emailAddress: '',
    class: '',
    section: '',
    stream: ''
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(studentData);
  };

  return (
    <div className="form-container">
      <div className="student-info">
        <h2>Admission Form</h2>
        <br/>
        <h3>Step-1: Basic Details</h3>
        <br/>
        <div className='student-pic'>
        <img src={studentpic} alt='studentpic'/>
        </div>
        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-group">
            <input type="text" name="studentName" value={studentData.studentName} onChange={handleChange}  placeholder=" " />
            <label>Student Name</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="mobileNo" value={studentData.mobileNo} onChange={handleChange} placeholder=" " />
            <label>Mobile Number</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="address" value={studentData.address} onChange={handleChange}   placeholder=" " />
            <label>Address</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="admissionNo" value={studentData.admissionNo} onChange={handleChange}   placeholder=" " />
            <label>Admission No.</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="date" name="admissionDate" value={studentData.admissionDate} onChange={handleChange}   placeholder=" " />
            <label>Admission Date</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="srNo" value={studentData.srNo} onChange={handleChange}   placeholder=" " />
            <label>SR No.</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="openingAmount" value={studentData.openingAmount} onChange={handleChange}   placeholder=" " />
            <label>Opening Amount</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="fathersName" value={studentData.fathersName} onChange={handleChange}   placeholder=" " />
            <label>Father's Name</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="mothersName" value={studentData.mothersName} onChange={handleChange}   placeholder=" " />
            <label>Mother's Name</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="text" name="alternativeNo" value={studentData.alternativeNo} onChange={handleChange}   placeholder=" " />
            <label>Alternative Number</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <input type="email" name="emailAddress" value={studentData.emailAddress} onChange={handleChange}   placeholder=" " />
            <label>Email Address</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <select name="class" value={studentData.class} onChange={handleChange}  >
              <option value="" disabled>Select Class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
            </select>
            <label>Select Class</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <select name="stream" value={studentData.stream} onChange={handleChange}  >
              <option value="" disabled>Select Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
            <label>Select Stream</label>
            <div className="bar"></div>
          </div>
          <div className="form-group">
            <select name="section" value={studentData.section} onChange={handleChange}  >
              <option value="" disabled>Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <label>Select Section</label>
            <div className="bar"></div>
          </div>
          {/* <div className="form-group submit-button">
            <button type="submit">Next</button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
