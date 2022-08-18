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

const IndividualPost = ({ postid }) => {
  return (
    <div className="recipe-pages" key={postid} id={postid}>
      IndividualPost {RECIPES.postid} {console.log(postid)}
      <h1>Something</h1>
    </div>
  );
};

export default IndividualPost;
