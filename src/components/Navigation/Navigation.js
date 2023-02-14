import React, { useContext } from "react";
import "./Navigation.scss";
import Logo from "components/Logo";
import RouteContext from "context/RouteContext";
import ROUTES from "constants/Routes";

const NavLink = ({ route, label }) => {
  const { onRouteChange } = useContext(RouteContext);
  return (
    <p
      className="f4 link dim black underline pointer ma0"
      onClick={() => onRouteChange(route)}
    >
      {label}
    </p>
  );
};

const Navigation = () => {
  const { route } = useContext(RouteContext);

  return (
    <nav className="navigation">
      <Logo />
      <div className="right">
        {route === ROUTES.HOME ? (
          <NavLink label="Sign Out" route={ROUTES.SIGNIN} />
        ) : (
          <>
            <NavLink label="Sign In" route={ROUTES.SIGNIN} />
            <NavLink label="Register" route={ROUTES.SIGNUP} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
