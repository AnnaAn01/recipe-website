import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="navbar__item-link">
        <div className="navbar__item">HOME</div>
      </NavLink>

      <NavLink to="/recipe" className="navbar__item-link">
        <div className="navbar__item">RECIPES</div>
      </NavLink>
      <NavLink to="/about" className="navbar__item-link">
        <div className="navbar__item">ABOUT</div>
      </NavLink>
    </>
  );
};

export default NavLinks;
