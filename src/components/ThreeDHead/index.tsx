import React from "react";

const ThreeDHead: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        src="https://3dhead.vercel.app/"
        title="3D Head Demo"
        style={{
          border: "none",
          borderRadius: "30px",
          width: "100%",
          maxWidth: "600px",
          aspectRatio: "1 / 1",
          minHeight: "300px",
        }}
        allow="fullscreen"
      />
    </div>
  );
};

export default ThreeDHead;
