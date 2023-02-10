import React from "react";

const FaceBox = ({ containerWidth, containerHeight, box }) => {
  const { bottom_row, left_col, right_col, top_row } = box;
  const width = (right_col - left_col) * containerWidth;
  const height = (bottom_row - top_row) * containerHeight;

  return (
    <div
      className="face-box"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top_row * 100}%`,
        left: `${left_col * 100}%`,
      }}
    />
  );
};

export default FaceBox;
