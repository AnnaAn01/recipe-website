import React from "react";
import RECIPES from "../SearchBar/RECIPES.json";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="recipes__list-parent">
      {posts.map((el, index) => {
        return (
          <div key={index} className="recipes__list" id={el.id}>
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
