
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

    const handleEmailBlur = (e) => {
      setEmail(e.target.value)
      console.log(e.target.value);
    }

    const handlePassBlur = (e) => { 
      setPassword(e.target.value)
    }

    const handleConfirmPassBlur = (e) => { 
      setConfirmPass(e.target.value)
    }

    if (user) {
      navigate('/shop');
    }

    const handleCreateUser = (e) => {
      e.preventDefault();
      if (password !== confirmPass) {
        setError('Your Password Does not Match')
        return;
      }

      createUserWithEmailAndPassword(email, password);
    }
 
    return (
        <div className="form-container">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} type="email" name="email" required/>
          <label htmlFor="password">Password</label>
          <input onBlur={handlePassBlur} type="password" name="password" required/>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input onBlur={handleConfirmPassBlur}  type="password" name="confirm-password" required/>
          <p style={{color: 'red', margin: 0}}>{error}</p>
          <br />
          <button className='login-btn'>Sign Up</button>
          <p>
              Already have an account? <Link className="form-link" to={'/login'}>Login</Link> 
          </p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;