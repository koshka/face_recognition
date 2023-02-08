import React from "react";
import "./Navigation.css";
import Logo from "components/Logo";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <p className="f4 link dim black underline pointer ma0">Sign Out</p>
    </nav>
  );
};

export default Navigation;
