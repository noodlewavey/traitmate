import React from "react";

const CircularFrame = ({ imageUrl}) => {
  return (
    <div
      style={{
        position: "relative",
        // top: "2rem",
        // right: "1rem",
        width: "8rem",
        height: "8rem",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
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
