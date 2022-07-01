import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import MOCK_DATA from "./MOCK_DATA.json";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
      <BsSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search our recipes"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <span className="search__or-span">OR</span>
      <span className="search__view-all-span">View all Recipes</span>
      <div className="search__value">
        {MOCK_DATA.filter((val) => {
          if (searchTerm === "") {
            return "";
          } else if (
            val.first_name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return <Link to="/about">{val}</Link>;
          }
        }).map((val, key) => {
          return (
            <div className="search__value-div" key={key}>
              <p className="search__value-p">
                <Link to="/about" className="search__value-link-returned">
                  {val.first_name}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
