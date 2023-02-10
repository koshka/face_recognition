import React, { useRef } from "react";
import FaceBox from "./FaceBox";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, boxes }) => {
  const imageRef = useRef(null);

  if (imageURL == null || imageURL === "") {
    return null;
  }

  const image = imageRef.current ?? {};
  const imageWidth = image.width != null ? Number(image.width) : 0;
  const imageHeight = image.height != null ? Number(image.height) : 0;

  return (
    <div className="face-recognition">
      <div className="image-wrapper">
        <img ref={imageRef} alt="source" src={imageURL} />
        {boxes.map((box, index) => (
          <FaceBox
            box={box}
            key={index}
            containerWidth={imageWidth}
            containerHeight={imageHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
