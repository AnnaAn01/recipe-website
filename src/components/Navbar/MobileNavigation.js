import React from "react";
import NavLinks from "./NavLinks";
import { FaHamburger } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import { CgMenuHotdog } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  const openHamburgerIcon = (
    <CgMenuHotdog
      className="navnar__mobile-menu-icon"
      onClick={() => setOpenMobileMenu(!openMobileMenu)}
    />
  );

  const closeHamburgerIcon = (
    <AiFillCloseSquare
      className="navnar__mobile-menu-icon"
      onClick={() => setOpenMobileMenu(!openMobileMenu)}
    />
  );

  const closeMobileMenuAfterClick = () => setOpenMobileMenu(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <nav className="navbar__mobile-hamburger">
      <NavLink to="/" className="navbar__title">
        <div className="navbar__title">Anna's Kitchen</div>
      </NavLink>
      {openMobileMenu ? closeHamburgerIcon : openHamburgerIcon}
      {/*If the value of  openMobileMenu is true then show <NavLinks/>*/}
      {openMobileMenu && (
        <NavLinks
          isMobile={true}
          closeMobileMenuAfterClick={closeMobileMenuAfterClick}
        />
      )}
    </nav>
  );
};

export default MobileNavigation;
