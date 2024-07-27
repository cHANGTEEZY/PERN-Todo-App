import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful", data);
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h1 className="login-header">Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-4">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control custom-input"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control custom-input"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="signup mt-2 d-flex justify-content-between align-items-center">
        <button type="submit" className="btn btn-danger">
          Login
        </button>
        <Link to="/signup">Signup</Link>
      </div>
    </form>
  );
};

export default Login;
