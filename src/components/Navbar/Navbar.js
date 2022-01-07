import React, { useState } from "react";
import "./Navbar.css";
import { GrClose, GrMenu } from "react-icons/gr";
import Menu from "./Menu/Menu";

const Navbar = ({ eng }) => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      {!menu ? (
        <GrMenu size={20} className="menu" onClick={() => setMenu(true)} />
      ) : (
        <GrClose size={20} className="menu" onClick={() => setMenu(false)} />
      )}
      {menu ? <Menu setMenu={setMenu} eng={eng}></Menu> : <></>}
      <nav className={eng ? "navbar" : "navbarA "}>
        <a href="#">{eng ? "Home" : "الصفحة الرئيسية"}</a>
        <a href="#">{eng ? "Features" : "سمات"}</a>
        <a href="#">{eng ? "Page" : "الصفحة"}</a>
        <a href="#">{eng ? "Screenshots" : "لقطات"}</a>
        <a href="#">{eng ? "Pricing" : "التسعير"}</a>
        <a href="#">{eng ? "Contact" : "تواصل معنا"}</a>
      </nav>
    </header>
  );
};

export default Navbar;
