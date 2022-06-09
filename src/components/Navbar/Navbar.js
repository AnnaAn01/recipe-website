import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__title">TITLE HERE</div>
        <div className="navbar__item-container">
          <div className="navbar__item">HOME</div>
          <div className="navbar__item">ABOUT</div>
          <div className="navbar__item">RECIPES</div>
          <div className="navbar__item navbar__search">
            <BsSearch />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
