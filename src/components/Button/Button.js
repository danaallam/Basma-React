import React from "react";
import "./Button.css";

const Button = ({ title, icon, click }) => {
  return (
    <button className="btn" onClick={click}>
      {icon ? React.createElement(icon) : ""}
      {title}
    </button>
  );
};

export default Button;
