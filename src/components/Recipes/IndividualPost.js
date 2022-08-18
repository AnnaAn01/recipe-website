// import React from "react";
// import RECIPES from "../../SearchBar/RECIPES.json";
// import "./RecipePages.css";
// import Posts from "../Posts";
// import Recipes from "../Recipes";

// const RecipePages = ({ currentPosts, loading, posts, handleClick }) => {
//   return (
//     <div className="recipe-pages">
//       {RECIPES.map((el, index) => {
//         return <div>{el.name} </div>;
//       })}
//     </div>
//   );
// };

// export default RecipePages;

import React from "react";
import RECIPES from "../SearchBar/RECIPES.json";
import "./IndividualPost.css";
import { useParams } from "react-router-dom";

const IndividualPost = () => {
  const params = useParams();
  // let id = JSON.parse(params);
  // console.log(id);
  // console.log(typeof params);
  let id = Number(params.postid.substring(1));
  console.log(typeof id);
  console.log(id);
  // console.log("this is the id", id);
  // console.log("params.postid", params.postid);
  // console.log("params.postid", params.postid);
  // console.log("typeof params.postid", typeof params.postid);

  return (
    <div className="recipe-pages recipe-pages/:postid">
      IndividualPost
      <h1>{RECIPES[id].name}</h1>
    </div>
  );
};

export default IndividualPost;
