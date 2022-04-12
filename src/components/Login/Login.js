import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required/>
          <br />
          <button className='login-btn'>Login</button>
          <p>
              New to Ema-Joh? <Link className="form-link" to={'/signup'}>create a account</Link> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
