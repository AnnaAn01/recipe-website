import React from "react";
import "./Recipes.css";
import SearchBar from "../SearchBar/SearchBar";

const Recipes = () => {
  return (
    <>
      <div className="recipes__container">
        <div className="recipes__wrapper">
          <div className="recipes__title">Find our recipes below</div>
          <div className="recipes-search__wrapper">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
