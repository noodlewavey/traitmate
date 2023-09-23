import React from "react";

const MatchCardProfilePhoto = ({ imageUrl}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "4rem",
        height: "4rem",
        marginTop: "0.4rem",
        marginRight:"1rem",
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

export default MatchCardProfilePhoto;