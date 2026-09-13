import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    mobileNumber: '',
    stream: '',
    subject: '',
    guardianName: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Data:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="app">
      <div className="form-container">
        <h1>MySchoolApp</h1>
        <h2>Student Registration</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="className">Class</label>
            <input
              type="text"
              id="className"
              name="className"
              value={formData.className}
              onChange={handleChange}
              placeholder="Enter class"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stream">Stream</label>
            <select
              id="stream"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              required
            >
              <option value="">Select stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guardianName">Guardian Name</label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="Enter guardian name"
              required
            />
          </div>

          <button type="submit" className="save-btn">Save</button>
        </form>

        {showSuccess && (
          <div className="success-message">
            Student data saved successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
