import React from "react";
import Desc from "./Description/Desc";
import "./Tools.css";

const Tools = ({ eng }) => {
  return (
    <div className="toolsDiv">
      <div className="imageBox">
        <img src="assets/thumb-2 (1).png" alt="mobile-pic" className="img1" />
      </div>
      <Desc eng={eng} />
    </div>
  );
};

export default Tools;
