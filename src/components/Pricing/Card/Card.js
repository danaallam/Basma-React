import React, { useState } from "react";
import Popup from "../../Popup/Popup";
import "./Card.css";

const Card = ({ img, type, price, space, db, info, backup, eng }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cardDiv">
      <img src={img} alt={type} className="stepImg" />
      <h3 className="cardType">{type}</h3>
      <h2 className="cardPrice">
        $<span className="cardSpan">{price}</span>
      </h2>
      <hr className="cardLine" />
      <p className="cardText">{space}</p>
      <hr className="cardLine" />
      <p className="cardText">{db}</p>
      <hr className="cardLine" />
      <p className="cardText">{info}</p>
      <hr className="cardLine" />
      <p className="cardText">{backup}</p>
      <hr className="cardLine" />
      <button
        className="btn cardBtn"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {eng ? "Sign Up" : "اشترك"}
      </button>
      {isOpen ? <Popup close={() => setIsOpen(false)} eng={eng} /> : null}
    </div>
  );
};

export default Card;
