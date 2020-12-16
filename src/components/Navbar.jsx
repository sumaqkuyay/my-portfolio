import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-list">
          <a href="#hero">Home</a>
        </li>
        <li className="nav-list">
          <a href="#about">About</a>
        </li>
        <li className="nav-list">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-list">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
