import React from "react";
import IconButton from "../../../IconButton/IconButton";
import "./IconBox.css";
import { FaBell, FaEnvelopeOpen, FaVideo } from "react-icons/fa";

const IconBox = () => {
  return (
    <div className="iconBoxDiv">
      <IconButton icon={FaBell} />
      <IconButton icon={FaEnvelopeOpen} />
      <IconButton icon={FaVideo} />
    </div>
  );
};

export default IconBox;
