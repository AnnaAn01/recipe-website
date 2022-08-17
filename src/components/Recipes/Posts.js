import React, { useState, useEffect } from "react";
import RECIPES from "../SearchBar/RECIPES.json";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  let clickedId = [];
  const handleClick = (index, el) => {
    console.log(el.name);
    console.log(el.id);
    clickedId.push(el.id);
    console.log("This is the clicked element's id", clickedId);

    // console.log(el.steps);

    // return <h1 className="h111">something {el.name}</h1>;
    // setIndivPost(el.name);
  };

  const postsList = posts.map((el, index) => {
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
  });
  // console.log(postsList);

  return <div className="recipes__list-parent">{postsList}</div>;
};

export default Posts;
