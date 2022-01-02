import React, { useState } from "react";
import "./Navbar.css";
import { GrClose, GrMenu } from "react-icons/gr";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      {!menu ? (
        <GrMenu size={20} className="menu" onClick={() => setMenu(true)} />
      ) : (
        <GrClose size={20} className="menu" onClick={() => setMenu(false)} />
      )}
      {menu ? <Menu setMenu={setMenu}></Menu> : <></>}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Page</a>
        <a href="#">Screenshots</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
