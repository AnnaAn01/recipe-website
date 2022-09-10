import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar__title">
          <div className="navbar__title">Anna's Kitchen</div>
        </NavLink>
        <div className="navbar__item-container">
          <NavLink to="/" className="navbar__item-link">
            <div className="navbar__item">HOME</div>
          </NavLink>

          <NavLink to="/recipe" className="navbar__item-link">
            <div className="navbar__item">RECIPES</div>
          </NavLink>
          <NavLink to="/about" className="navbar__item-link">
            <div className="navbar__item">ABOUT</div>
          </NavLink>
          <LinkS
            to="search-input"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-150}
            className="navbar__item navbar__search"
          >
            <BsSearch />
          </LinkS>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
