import React from "react";
import "./ContactInfoWay.css";

const ContactInfoWay = ({ img, text }) => {
  return (
    <div className="infoWayDiv">
      <img src={img} className="infoImg" />
      <span className="titleText">{text}</span>
    </div>
  );
};

export default ContactInfoWay;
