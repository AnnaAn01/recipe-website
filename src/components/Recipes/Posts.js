import React, { useState, useEffect } from "react";
import RECIPES from "../SearchBar/RECIPES.json";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleClick = (index, el) => {
    console.log(el.name);

    // console.log(el.steps);

    return <h1 className="h111">something {el.name}</h1>;
    // setIndivPost(el.name);
  };

  return (
    <div className="recipes__list-parent">
      {posts.map((el, index) => {
        return (
          <div
            name={el.name}
            key={index}
            className="recipes__list"
            id={el.id}
            src={el}
            onClick={(index) => handleClick(index, el)}
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
