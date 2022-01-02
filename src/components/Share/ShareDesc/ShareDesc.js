import React from "react";
import Feature from "./Feature/Feature";
import { RiStackFill } from "react-icons/ri";
import Button from "../../Button/Button";
import { FaBrush, FaCartArrowDown } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";

const ShareDesc = () => {
  return (
    <div className="titleIntro">
      <h1 className="codeTitle">Share your photos with friends easily</h1>
      <Feature
        icon={RiStackFill}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis."
      />
      <Feature
        icon={FaBrush}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis necessitatibus iusto ad corrupti deleniti, sunt fugit laboriosam."
      />
      <Feature
        icon={MdWaterDrop}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis."
      />
      <Feature
        icon={FaCartArrowDown}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere adipisci, unde nostrum enim magni omnis."
      />
      <Button title="Learn More" />
    </div>
  );
};
export default ShareDesc;
