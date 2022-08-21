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
  // console.log(typeof id);
  // console.log(id);

  return (
    <div className="recipe-pages recipe-pages/:postid">
      <div className="individual-post__wrapper">
        <h1 className="individual-post__title">{RECIPES[id].name}</h1>
        <div className="individual-post__opening-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          minus praesentium fuga nisi rerum molestiae. Officia laudantium ab
          ducimus dolor adipisci corrupti ipsa laborum, sint iste, voluptate
          iure perspiciatis a!
        </div>
        <div className="individual-post__img-wrapper">
          <img
            className="individual-recipe__img"
            src={RECIPES[id].imagePath}
            alt={RECIPES[id].name}
          />
        </div>
        <div className="individual-post__steps">
          {RECIPES[id].steps.map((step, index) => {
            return (
              <p key={index} className="recipe-steps">
                {step} &nbsp;
              </p>
            );
          })}
        </div>
        <div className="individual-post__ingredients-wrapper">
          {RECIPES.map((item, index) => {
            if (index === id) {
              return (
                <div key={index}>
                  {item.ingredients.map((c, i) => (
                    <div key={index}>
                      <li
                        key={index}
                        className="individual-post__ingredients-name"
                      >
                        {c.name} - {c.quantity}
                      </li>
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
