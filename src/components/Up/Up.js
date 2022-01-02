import React, { useState } from "react";
import "./Up.css";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Up = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BsArrowUpSquareFill
      className={showScroll ? "arrowUp" : "arrowHide"}
      size={30}
      color="#a4a4a4"
      onClick={scrollTop}
    />
  );
};

export default Up;
