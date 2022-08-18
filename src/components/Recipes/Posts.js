// import React, { useState, useEffect } from "react";
// import RECIPES from "../SearchBar/RECIPES.json";
// import { Link } from "react-router-dom";
// import IndividualPost from "./IndividualPost";

// const Posts = ({ posts, loading, setPostid, postid }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   let clickedId = [];
//   const handleClick = (index, el) => {
//     // console.log(el.name);
//     console.log(el.id);
//     console.log(typeof el.id);
//     // clickedId.push(el.id);
//     setPostid(el.id);

//     clickedId.push(el.id);
//     // console.log("This is the clicked element's id", clickedId);

//     // console.log(el.steps);

//     // return <h1 className="h111">something {el.name}</h1>;
//     // setIndivPost(el.name);
//     // console.log(clickedId[0].name);
//     // console.log(clickedId);
//   };
//   // console.log(clickedId);
//   console.log("posts postid", postid);

//   const postsList = posts.map((el, index) => {
//     return (
//       <Link to="/recipe-pages">
//         <div
//           name={el.name}
//           key={el.id}
//           className="recipes__list"
//           id={el.id}
//           src={el}
//           onClick={(index) => handleClick(index, el)}
//         >
//           <img
//             className="recipes__img"
//             alt="food"
//             // src={el.imageURL}
//             src={el.imagePath}
//           />
//           <div className="recipes__list-name">{el.name}</div>
//         </div>
//       </Link>
//     );
//   });
//   // console.log(postsList);

//   return <div className="recipes__list-parent">{postsList}</div>;
// };

// export default Posts;

import React from "react";
import RECIPES from "../SearchBar/RECIPES.json";
import { Link } from "react-router-dom";
import IndividualPost from "./IndividualPost";

const Posts = ({ posts, loading, setPostid, postid }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  let clickedId = [];
  const handleClick = (index, el) => {
    // console.log(el.name);
    console.log(el.id);
    console.log(typeof el.id);
    setPostid(el.id);

    clickedId.push(el.id);
  };

  console.log("posts postid", postid);

  const postsList = posts.map((el, index) => {
    return (
      <Link to="/recipe-pages">
        <div
          name={el.name}
          key={el.id}
          className="recipes__list"
          id={el.id}
          src={el}
          onClick={(index) => handleClick(index, el)}
        >
          <img className="recipes__img" alt="food" src={el.imagePath} />
          <div className="recipes__list-name">{el.name}</div>
        </div>
      </Link>
    );
  });

  return <div className="recipes__list-parent">{postsList}</div>;
};

export default Posts;
