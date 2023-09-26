import React from "react";

const MatchCardProfilePhoto = ({ imageUrl}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "7rem",
        height: "7rem",
        marginTop: "0.2rem",
        marginRight:"1rem",
        borderRadius: "10px",
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

export default MatchCardProfilePhoto;