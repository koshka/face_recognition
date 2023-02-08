import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="image-link-form">
      <p>Face recognition magic is happening here</p>
      <div className="input-wrapper">
        <input placeholder="Place a URL" />
        <button>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
