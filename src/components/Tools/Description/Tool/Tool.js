import React from "react";
import "./Tool.css";

const Tool = ({ text, eng }) => {
  return (
    <div className={eng ? "toolDiv" : "toolDivA"}>
      <img src="./assets/check.svg" className={eng ? "toolCheck" : "toolCheckA"} />
      <span className="titleText">{text}</span>
    </div>
  );
};

export default Tool;
