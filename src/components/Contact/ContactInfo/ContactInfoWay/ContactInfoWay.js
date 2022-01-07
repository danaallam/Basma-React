import React from "react";
import "./ContactInfoWay.css";

const ContactInfoWay = ({ img, text, eng }) => {
  return (
    <div className={eng ? "infoWayDiv" : "infoWayDivA"}>
      <img src={img} className={eng ? "infoImg": "infoImgA"} />
      <span className={eng ? "titleText": "titleTextA"}>{text}</span>
    </div>
  );
};

export default ContactInfoWay;
