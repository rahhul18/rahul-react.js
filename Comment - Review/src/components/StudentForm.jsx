import React, { useState } from 'react';

const StudentForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      password,
      grade,
      gender,
    };
    console.log(formData);
  };

  return (
    <>
    <h1>SingUp</h1>
    <form 
      onSubmit={handleSubmit} 
      style={{
        backgroundColor: "#9cf",
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "20px auto"
      }}
    >
        
      {/* Text Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px"
          }}
        />
      </div>

      {/* Email Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px"
          }}
        />
      </div>

      {/* Password Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px"
          }}
        />
      </div>

      {/* Select Input */}
      <div style={{ marginBottom: "10px" }}>
        <select 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px"
          }}
        >
          <option value="">Select Grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      {/* Radio Buttons */}
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Gender</label>
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            value="Male"
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
            style={{ marginRight: "5px" }}
          />
          Male
        </label>
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
            style={{ marginRight: "5px" }}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="Other"
            checked={gender === 'Other'}
            onChange={(e) => setGender(e.target.value)}
            style={{ marginRight: "5px" }}
          />
          Other
        </label>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default StudentForm;
