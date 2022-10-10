import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -100 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <motion.div
      className="navbar__item-link-wrapper"
      initial={animateFrom}
      animate={animateTo}
    >
      <NavLink
        to="/"
        className="navbar__item-link"
        onClick={() => props.isMobile && props.closeMobileMenuAfterClick()}
      >
        <div className="navbar__item">HOME</div>
      </NavLink>

      <NavLink
        to="/recipe"
        className="navbar__item-link"
        onClick={() => props.isMobile && props.closeMobileMenuAfterClick()}
      >
        <div className="navbar__item">RECIPES</div>
      </NavLink>
      <NavLink
        to="/about"
        className="navbar__item-link"
        onClick={() => props.isMobile && props.closeMobileMenuAfterClick()}
      >
        <div className="navbar__item">ABOUT</div>
      </NavLink>
    </motion.div>
  );
};

export default NavLinks;
