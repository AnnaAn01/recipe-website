import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Link as LinkS } from "react-scroll";
import { BsSearch } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__title">
        <div className="navbar__title">Anna's Kitchen</div>
      </NavLink>
      <div className="navbar__item-container">
        <NavLinks />
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
  );
};

export default Navigation;
