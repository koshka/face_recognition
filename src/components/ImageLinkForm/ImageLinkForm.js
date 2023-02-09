import React, { useState } from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onChange, onDetect }) => {
  const [value, setValue] = useState("");
  const isValueEmpty = value === "" || value == null;

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    onChange(value);
  };

  const onDetectClick = () => {
    if (value != null) {
      onDetect(value);
    }
  };

  return (
    <div className="image-link-form">
      <p>Face recognition magic is happening here</p>
      <div className="input-wrapper">
        <input
          value={value}
          onBlur={onBlur}
          onChange={onValueChange}
          placeholder="Place a URL"
        />
        <button disabled={isValueEmpty} onClick={onDetectClick}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
