import React from 'react'
import "./SignUp.css"
import { Link } from "react-router-dom";
import { Button, TextField } from "../../components";

export const SignUpPage = () => {

  return (
    <div id="sign-up-container">
      <form id="form-container">
        <h1>Sign Up</h1>

        <TextField
          type="text"
          placeholder="First Name"
          name="firstName"
          // value={formData.firstName}
          // onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Last Name"
          name="lastName"
          // value={formData.lastName}
          // onChange={handleChange}
        />
        <TextField
          type="email"
          placeholder="Email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          // value={formData.password}
          // onChange={handleChange}
        />
        <Button type="submit" >
          Sign Up
        </Button>

        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Already have an account?
        </Link>

        {/* {error && <p style={{ color: "red", fontSize: "12px" }}> {error}</p>} */}
      </form>
    </div>
  );
};