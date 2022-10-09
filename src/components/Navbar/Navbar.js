import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Link as LinkS } from "react-scroll";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default Navbar;
