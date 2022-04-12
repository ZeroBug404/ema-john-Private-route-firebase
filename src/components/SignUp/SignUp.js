import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    

    return (
        <div className="form-container">
      <div>
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required/>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" required/>
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