import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL }) => {
  if (imageURL == null || imageURL === "") {
    return null;
  }

  return (
    <div className="face-recognition">
      <div className="image-wrapper">
        <img alt="source" src={imageURL} />
        <div className="bar ht" />
      </div>
    </div>
  );
};

export default FaceRecognition;
