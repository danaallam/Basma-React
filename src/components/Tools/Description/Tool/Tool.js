import React from "react";
import "./Tool.css";

const Tool = ({ text }) => {
  return (
    <div className="toolDiv">
      <img src="./assets/check.svg" className="toolCheck" />
      <span className="titleText">{text}</span>
    </div>
  );
};

export default Tool;
