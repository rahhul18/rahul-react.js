import React, { useState } from 'react';

const Login = () => {
  // State object to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: 'Male'
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form values as an object
    console.log(formData);
  };

  return (
    <>
      <h1>Login</h1>
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
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Radio Buttons */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Gender</label>
          <label style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            Male
          </label>
          <label style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
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

export default Login;
