import React from "react";
import "./CodeIcon.css";

const CodeIcon = ({ icon, title, text }) => {
  return (
    <div className="iconDiv">
      <div className="icon">{React.createElement(icon)}</div>
      <h4 className="iconTitle">{title}</h4>
      <p className="titleText">{text}</p>
    </div>
  );
};

export default CodeIcon;
