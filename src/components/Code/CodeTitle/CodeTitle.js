import React from "react";
import "./CodeTitle.css";

const CodeTitle = ({ title, text }) => {
  return (
    <div className="codeBox">
      <h1 className="codeTitle">{title}</h1>
      <hr className="codeLine" />
      <p className="titleText">{text}</p>
    </div>
  );
};

export default CodeTitle;
