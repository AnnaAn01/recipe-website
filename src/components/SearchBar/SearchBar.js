import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import MOCK_DATA from "./MOCK_DATA.json";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="search__value">
        {MOCK_DATA.map((val, key) => {
          return (
            <div className="search__value-div" key={key}>
              <p className="search__value-p">{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
