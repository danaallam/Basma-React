import React from "react";
import "./IconButton.css";

const IconButton = ({ icon, eng }) => {
  return <button className={eng ? "iconBtn" : "iconBtnA"}>{React.createElement(icon)}</button>;
};

export default IconButton;
