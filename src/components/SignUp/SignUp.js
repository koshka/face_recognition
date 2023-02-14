import ROUTES from "constants/Routes";
import RouteContext from "context/RouteContext";
import React, { useContext } from "react";
import "components/SignIn/SignIn.scss";

const SignUp = () => {
  const { onRouteChange } = useContext(RouteContext);

  return (
    <form className="auth-form" autoСomplete="off">
      <div className="container">
        <h1>Sign Up</h1>

        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="pwd">
          <b>Password</b>
        </label>
        <input
          autocomplete="off"
          type="password"
          placeholder="Enter Password"
          name="pwd"
          required
        />

        <button type="submit" onClick={() => onRouteChange(ROUTES.HOME)}>
          Sign Up
        </button>

        <button onClick={() => onRouteChange(ROUTES.SIGNIN)}>Sign In</button>
      </div>
    </form>
  );
};

export default SignUp;
