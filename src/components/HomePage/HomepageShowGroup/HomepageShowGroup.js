import React from "react";
import RECIPES from "../../SearchBar/RECIPES.json";
import "./HomepageShowGroup.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const HomepageShowGroup = () => {
  const foodGroups = RECIPES.map((el, index) => {
    if (el.group === "pasta") {
      return (
        <Link
          // to show the item numbers on pages 2 and 3
          to={`/recipe-pages/:${
            index
            // el.id <= 12 ? index : 12 * (el.page - 1) + index
            // Or we can use the page I manually added to the json file
            // el.page === 1 ? index : 12 * (el.page - 1) + index
          }`}
          className="recipes__list-link"
        >
          {/*{console.log(postsPerPage)}*/}
          {/*<Link to={`/recipe-pages/:${index}`}>*/}
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

  return <div className="homapage-show-group">Pasta Recipes{foodGroups}</div>;
};

export default HomepageShowGroup;
