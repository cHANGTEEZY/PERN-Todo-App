import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = userData;
    const url = "http://localhost:3000/register";
    console.log("Sending data:", JSON.stringify(formData));
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (response.ok) {
        const responseData = JSON.parse(responseText);
        if (responseData.success) {
          console.log("User registered successfully");
        } else {
          console.log("Registration failed");
        }
      } else {
        console.log("Error response:", responseText);
        alert("Error registering: " + responseText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control custom-input"
            name="user_name"
            placeholder="Enter your full name"
            value={userData.user_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control custom-input"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control custom-input"
            name="password"
            placeholder="Enter your password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-danger">
            Sign Up
          </button>
          <Link to="/login" className="btn btn-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
