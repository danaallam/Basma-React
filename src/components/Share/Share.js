import React from "react";
import ShareDesc from "./ShareDesc/ShareDesc";

const Share = ({ eng }) => {
  return (
    <div className={eng ? "introBox" : "introBoxA"}>
      <ShareDesc eng={eng} />
      <div className={eng ? "imageBox": "imageBoxA"}>
        <img src="assets/thumb-2.png" alt="mobile-pic" className="img2" />
      </div>
    </div>
  );
};

export default Share;
