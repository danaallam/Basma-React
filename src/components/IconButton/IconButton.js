import React from "react";
import "./IconButton.css";

const IconButton = ({ icon }) => {
  return <button className="iconBtn">{React.createElement(icon)}</button>;
};

export default IconButton;
