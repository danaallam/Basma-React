import React from "react";
import "./Menu.css";

const Menu = ({ setMenu, eng }) => {
  return (
    <div className="menuDiv">
      <div onClick={() => setMenu(false)}>
        <li>{eng ? "Home" : "الصفحة الرئيسية"}</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>{eng ? "Features" : "سمات"}</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>{eng ? "Page" : "الصفحة"}</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>{eng ? "Screenshots" : "لقطات"}</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>{eng ? "Pricing" : "التسعير"}</li>
      </div>
      <div onClick={() => setMenu(false)}>
        <li>{eng ? "Contact" : "تواصل معنا"}</li>
      </div>
    </div>
  );
};

export default Menu;
