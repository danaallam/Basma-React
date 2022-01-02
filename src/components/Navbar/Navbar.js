import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
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
