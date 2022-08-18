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
  // getting the clicked post id from the router
  let id = Number(params.postid.substring(1));
  console.log(typeof id);
  console.log(id);

  return (
    <div className="recipe-pages recipe-pages/:postid">
      <div className="individual-post__wrapper">
        <h1 className="individual-post__title">{RECIPES[id].name}</h1>
        <div className="individual-post__opening-text">{RECIPES[id].steps}</div>
      </div>
    </div>
  );
};

export default IndividualPost;
