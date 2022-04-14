/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)
  }

  const handlePassBlur = (e) => { 
    setPassword(e.target.value)
  }

  if (user) {
    navigate(from, {replace: true});
  }

  const handleUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="form-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleUser}>
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} type="email" name="email" required/>
          <label htmlFor="password">Password</label>
          <input onBlur={handlePassBlur} type="password" name="password" required/>
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
