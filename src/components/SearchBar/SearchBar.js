import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-container">
      <BsSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search our recipes"
      />
      <span className="search__or-span">OR</span>
      <span className="search__view-all-span">View all Recipes</span>
    </div>
  );
};

export default SearchBar;
