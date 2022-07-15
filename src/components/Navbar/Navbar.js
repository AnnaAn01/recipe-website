import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = () => {
  // const [click, setClick] = useState(false);

  // const handleClick = () => {
  //   setClick((click) => !click);
  // };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__title">
          <div className="navbar__title">TITLE HERE</div>
        </Link>
        <div className="navbar__item-container">
          <Link to="/" className="navbar__item-link">
            <div className="navbar__item">HOME</div>
          </Link>
          <Link to="/about" className="navbar__item-link">
            <div className="navbar__item">ABOUT</div>
          </Link>
          <Link to="/recipe" className="navbar__item-link">
            <div className="navbar__item">RECIPES</div>
          </Link>
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
