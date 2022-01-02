import React from "react";
import "./Card.css";

const Card = ({ img, type, price, space, db, info, backup }) => {
  return (
    <div className="cardDiv">
      <img src={img} alt={type} className="stepImg" />
      <h3 className="cardType">{type}</h3>
      <h2 className="cardPrice">
        $<span className="cardSpan">{price}</span>
      </h2>
      <hr className="cardLine" />
      <p className="titleText">{space}</p>
      <hr className="cardLine" />
      <p className="titleText">{db}</p>
      <hr className="cardLine" />
      <p className="titleText">{info}</p>
      <hr className="cardLine" />
      <p className="titleText">{backup}</p>
      <hr className="cardLine" />
      <button className="btn cardBtn">Sign Up</button>
    </div>
  );
};

export default Card;
