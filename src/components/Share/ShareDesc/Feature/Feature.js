import React from "react";
import IconButton from "../../../IconButton/IconButton";
import "./Feature.css";

const Feature = ({ icon, text }) => {
  return (
    <div className="featureDiv">
      <IconButton icon={icon} />
      <span className="titleText">{text}</span>
    </div>
  );
};

export default Feature;
