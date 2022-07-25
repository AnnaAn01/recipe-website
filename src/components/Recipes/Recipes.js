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
          <div className="recipes__all-container">
            <div className="recipes__all-wrapper">
              <div className="recipes__all-title">ALL RECIPES</div>
              <div className="recipes__all-list-container">
                <div className="recipes__all-list-wrapper">
                  <div class="recipes__list-parent">
                    <div class="recipes__list recipes__list-1"> </div>
                    <div class="recipes__list recipes__list-2"> </div>
                    <div class="recipes__list recipes__list-3"> </div>
                    <div class="recipes__list recipes__list-4"> </div>
                    <div class="recipes__list recipes__list-5"> </div>
                    <div class="recipes__list recipes__list-6"> </div>
                    <div class="recipes__list recipes__list-7"> </div>
                    <div class="recipes__list recipes__list-8"> </div>
                    <div class="recipes__list recipes__list-9"> </div>
                    <div class="recipes__list recipes__list-10"> </div>
                    <div class="recipes__list recipes__list-11"> </div>
                    <div class="recipes__list recipes__list-12"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
