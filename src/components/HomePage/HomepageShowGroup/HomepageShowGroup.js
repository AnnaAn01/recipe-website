import React from "react";
import RECIPES from "../../SearchBar/RECIPES.json";
import HomePageSectionOne from "../HomePageSectionOne.json";
import "./HomepageShowGroup.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const HomepageShowGroup = () => {
  const params = useParams();
  let id = params.postid.substring(1);
  // let id = Number(params.postid.substring(1));
  let hpSectionOneId =
    id === "pasta"
      ? 0
      : id === "snacks"
      ? 1
      : id === "oven"
      ? 2
      : id === "spicy"
      ? 3
      : "";

  console.log("id inside HSG", id);
  console.log(HomePageSectionOne[0].imagePath);

  const foodGroups = RECIPES.map((el, index) => {
    if (id === el.group) {
      return (
        <Link to={`/recipe-pages/:${id}`} className="recipes__list-link">
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
          <div className="show-group__intro-img-wrapper"></div>
          <img
            src={HomePageSectionOne[hpSectionOneId].imagePath}
            alt="food"
            className="show-group__intro-img"
          />
          <div className="show-group__intro-title">
            {HomePageSectionOne[hpSectionOneId].label} Recipes
          </div>
          {foodGroups}
        </div>
      </div>
    </div>
  );
};

export default HomepageShowGroup;
