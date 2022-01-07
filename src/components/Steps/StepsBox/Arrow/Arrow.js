import React from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import "./Arrow.css";

const Arrow = ({eng}) => {
  return (
    <div className="arrowDiv">
      {eng ? <MdOutlineArrowForwardIos color="white" className="arrow"/>:
      <MdOutlineArrowBackIos color="white" className="arrow"/>}
    </div>
  );
};

export default Arrow;
