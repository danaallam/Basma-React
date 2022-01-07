import React from "react";
import IconButton from "../../../IconButton/IconButton";
import "./Feature.css";

const Feature = ({ icon, text, eng }) => {
  return (
    <div className={eng ? "featureDiv" : "featureDivA"}>
      <IconButton icon={icon} eng={eng} />
      <span className={eng ? "titleText" : "titleTextA"}>{text}</span>
    </div>
  );
};

export default Feature;
