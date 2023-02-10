import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ isLoading, onChange, onDetect, value }) => {
  const isValueEmpty = value === "" || value == null;

  const onValueChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="image-link-form">
      <p>Face recognition magic is happening here</p>
      <div className="input-wrapper">
        <input
          value={value}
          onChange={onValueChange}
          placeholder="Place a URL"
        />
        <button disabled={isValueEmpty || isLoading} onClick={onDetect}>
          {isLoading ? "Loading..." : "Detect"}
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
