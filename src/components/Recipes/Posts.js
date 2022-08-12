import React from "react";
import RECIPES from "../SearchBar/RECIPES.json";

const Posts = () => {
  return (
    <div className="recipes__list-parent">
      {RECIPES.map((el, index) => {
        return (
          <div
            key={index}
            className="recipes__list"
            id={`recipes__list-${index + 1}`}
          >
            <img
              className="recipes__img"
              alt="food"
              // src={el.imageURL}
              src={el.imagePath}
            />
            <div className="recipes__list-name">{el.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
