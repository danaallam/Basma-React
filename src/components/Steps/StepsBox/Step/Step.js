import React from "react";
import "./Step.css";

const Step = ({ img, title, text }) => {
  return (
    <div className="stepDiv">
      <img src={img} alt={title} className="stepImg" />
      <h3 className="stepTitle">{title}</h3>
      <p className="stepsTitleText">{text}</p>
    </div>
  );
};

export default Step;
