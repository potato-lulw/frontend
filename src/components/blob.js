// BlobOverlay.js
import React from "react";

const BlobOverlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
    </div>
  );
};

export default BlobOverlay;
