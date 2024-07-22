import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
const Login = () => {
  return (
    <>
      <form className="login-container ">
        <h1 className="login-header">Sign in</h1>
        <div className="mb-4">
          <label className="form-label ">Email </label>
          <input
            type="email"
            className="form-control custom-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onFocus={(e) => (e.target.style.borderColor = "Black")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control custom-input"
            id="exampleInputPassword1"
            onFocus={(e) => (e.target.style.borderColor = "Black")}
          />
        </div>
        <div className="signup mt-2 d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-danger">
            Login
          </button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
