import React from "react";
import "./Lang.css";

const Lang = ({ lang, onClick }) => {
  return (
    <div className="langDiv" onClick={onClick}>
      <span className="langSpan">{lang}</span>
    </div>
  );
};

export default Lang;
