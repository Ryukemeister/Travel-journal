import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img
        className="nav-logo"
        src="./src/assets/Navbar_logo.png"
        alt="Navbar icon"
      />
      <h3 className="nav-title">my travel journal.</h3>
    </nav>
  );
}
