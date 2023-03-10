import ROUTES from "constants/Routes";
import RouteContext from "context/RouteContext";
import React, { useContext } from "react";
import "./SignIn.scss";

const SignIn = () => {
  const { onRouteChange } = useContext(RouteContext);

  return (
    <form className="auth-form">
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

        <button type="submit" onClick={() => onRouteChange(ROUTES.HOME)}>
          Sign In
        </button>
        <button onClick={() => onRouteChange(ROUTES.SIGNUP)}>Sign Up</button>
      </div>
    </form>
  );
};

export default SignIn;
