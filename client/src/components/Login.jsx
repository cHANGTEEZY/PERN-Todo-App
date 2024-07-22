import { Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <div className="username-area">
            <input type="uername" placeholder="Username" />
          </div>
          <div className="email-area">
            <input type="email" placeholder="email" />
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <div className="login-area">
            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
