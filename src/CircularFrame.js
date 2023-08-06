import React from "react";

const CircularFrame = ({ imageUrl }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      {/* Image placed inside the circular frame */}
      <img
        src={imageUrl}
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CircularFrame;
