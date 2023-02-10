import React from "react";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <form className="signin-form">
      <div className="container">
        <h1>Sign In</h1>

        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <button type="submit">Sign In</button>
      </div>
    </form>
  );
};

export default SignIn;
