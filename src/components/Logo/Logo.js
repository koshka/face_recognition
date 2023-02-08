import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import face from "face.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <Tilt className="br2 shadow-2 logo" tiltMaxAngleX="40">
        <img alt="logo" src={face} />
      </Tilt>
    </div>
  );
};

export default Logo;
