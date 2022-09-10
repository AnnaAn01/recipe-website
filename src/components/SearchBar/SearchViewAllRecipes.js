import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchViewAllRecipes = () => {
  return (
    <div>
      <span className="search__or-span">OR</span>
      <Link to="/recipe" className="search__view-all-link">
        <span className="search__view-all-span">View all Recipes</span>
      </Link>
    </div>
  );
};

export default SearchViewAllRecipes;
