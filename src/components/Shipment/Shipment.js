/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Shipment = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassBlur = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h2>Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <label htmlFor="email">Name</label>
          <input onBlur={handleNameBlur} type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input onBlur={handleNameBlur} type="email" name="email" required />
          <label htmlFor="password">Address</label>
          <input
            onBlur={handlePassBlur}
            type="text"
            name="Address"
            required
          />
          <label htmlFor="confirm-password">Phone Number</label>
          <input
            onBlur={handleConfirmPassBlur}
            type="text"
            name="phone number"
            required
          />
          
          <br />
          <button style={{marginBottom: '15px'}} className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
