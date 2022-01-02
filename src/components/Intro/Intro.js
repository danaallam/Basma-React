import React from "react";
import Title from "./Title/Title";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="introBox">
      <Title />
      <div className="imageBox">
        <img src="assets/thumb-1.png" alt="mobile-pic" className="img" />
      </div>
    </div>
  );
};

export default Intro;
