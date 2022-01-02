import React from "react";
import "./Share.css";
import ShareDesc from "./ShareDesc/ShareDesc";

const Share = () => {
  return (
    <div className="introBox">
      <ShareDesc />
      <div className="imageBox">
        <img src="assets/thumb-2.png" alt="mobile-pic" className="img2" />
      </div>
    </div>
  );
};

export default Share;
