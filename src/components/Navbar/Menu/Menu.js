import React from "react";
import "./Menu.css";

const Menu = ({ setMenu }) => {
  return (
    <div className="menuDiv">
      <div onClick={() => setMenu(false)}>
        <li>Home</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>Features</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>Page</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>Screenshots</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>Pricing</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>Contact</li>
      </div>
    </div>
  );
};

export default Menu;
