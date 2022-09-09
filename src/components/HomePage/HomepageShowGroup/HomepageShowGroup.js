import React from "react";
import RECIPES from "../../SearchBar/RECIPES.json";
import "./HomepageShowGroup.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const HomepageShowGroup = () => {
  const params = useParams();
  let id = params.postid.substring(1);
  console.log("id inside HSG", id);

  const foodGroups = RECIPES.map((el, index) => {
    if (el.group === "pasta") {
      return (
        <Link to={`/recipe-pages/:${index}`} className="recipes__list-link">
          <div
            name={el.name}
            key={el.index}
            className="recipes__list"
            id={el.id}
            src={el}
          >
            {/*{console.log(el.currentPage)}*/}
            <img className="recipes__img" alt="food" src={el.imagePath} />
            <div className="recipes__list-name">{el.name}</div>
          </div>
        </Link>
      );
    }
  });

  return (
    <div className="homapage-show-group">
      <div className="show-group__container">
        <div className="show-group__intro-wrapper">
          <div className="show-group__intro-img-wrapper">
            <img src="" alt="food" className="show-group__intro-img" />
          </div>
          <div className="show-group__intro-title">Pasta Recipes</div>
        </div>
        {foodGroups}
      </div>
    </div>
  );
};

export default HomepageShowGroup;
