import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control custom-input"
            id="fullName"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Email </label>
          <input
            type="email"
            className="form-control custom-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control custom-input"
            id="exampleInputPassword1"
            placeholder="Enter your password"
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
