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

  // let someID = 0;
  // for (let i = 0; i < HomePageSectionOne.length; i++) {
  //   if (id === i.group) {
  //     return i;
  //   }
  //   someID = i;
  // }

  // console.log("someID", someID);

  let hpSectionOneId =
    id === "pasta"
      ? 0
      : id === "snacks"
      ? 1
      : id === "oven"
      ? 2
      : id === "spicy"
      ? 3
      : id === "vegan"
      ? 4
      : "";

  console.log(HomePageSectionOne.length);
  let groupTitle = HomePageSectionOne[hpSectionOneId].label;

  const foodGroups = RECIPES.map((el, index) => {
    if (id === el.group) {
      return (
        <Link to={`/recipe-pages/:${el.id - 1}`} className="recipes__list-link">
          <div
            name={el.name}
            key={el.index}
            className="homepage-group-list__wrapper"
            id={el.showId}
            src={el}
          >
            <img className="show__item-img" alt="food" src={el.imagePath} />
            <div className="show__item-name">{el.name}</div>
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
            <img
              src={HomePageSectionOne[hpSectionOneId].imagePath}
              alt="food"
              className="show-group__intro-img intro-img__width"
            />
            <div className="show-group__intro-img-description intro-img__width"></div>
          </div>
          <div className="group-intro-text__wrapper">
            <div className="show-group__intro-title ">
              {groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1)} Recipes
            </div>
            <div className="show-group__intro-description">
              {HomePageSectionOne[hpSectionOneId].description}
            </div>
          </div>
        </div>
        <div className="food-group__wrapper">{foodGroups}</div>
      </div>
    </div>
  );
};

export default HomepageShowGroup;
