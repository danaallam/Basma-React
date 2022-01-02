import React from "react";
import "./Button.css";

const Button = ({ title, icon }) => {
  return (
    <button className="btn">
      {icon ? React.createElement(icon) : ""}
      {title}
    </button>
  );
};

export default Button;
