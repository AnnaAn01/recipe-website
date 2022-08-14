import React from "react";
import RECIPES from "../../SearchBar/RECIPES.json";
import "./RecipePages.css";
import Posts from "../Posts";
import Recipes from "../Recipes";

const RecipePages = ({ currentPosts, loading, posts }) => {
  return (
    <div className="recipe-pages">
      {RECIPES.map((el, index) => {
        return <div>{el.name} </div>;
      })}
    </div>
  );
};

export default RecipePages;
