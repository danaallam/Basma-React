import React from "react";
import Title from "./Title/Title";
import "./Intro.css";

const Intro = ({ arabic, eng }) => {
  return (
    <div className={eng ? "introBox" : "introBoxA"}>
      <Title arabic={arabic} eng={eng} />
      <div className={eng ? "imageBox": "imageBoxA"}>
        <img src="assets/thumb-1.png" alt="mobile-pic" className="img" />
      </div>
    </div>
  );
};

export default Intro;
