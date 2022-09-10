import React from "react";
import "./HomePage.css";
import HomePageSectionOne from "./HomePageSectionOne.json";

import SearchBar from "../SearchBar/SearchBar";
import RECIPES from "../SearchBar/RECIPES.json";
import { Link } from "react-router-dom";
import SearchViewAllRecipes from "../SearchBar/SearchViewAllRecipes";
import ScrollUpBtn from "../ScrollUpButton/ScrollUpBtn";

const HomePage = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const homeSetionOne = HomePageSectionOne.map((el, index) => {
    return (
      <Link
        to={`/homapage-show-group/:${el.id}`}
        className="recipes__list-link"
      >
        <div
          className="homepage-first__card"
          id={el.id}
          key={el.id}
          label={el.label.toUpperCase()}
          // src={el.imagePath}
        >
          <div className="card__img">
            <img src={el.imagePath} alt={el.id} className="card__img" />
          </div>

          {/*<div className="card__img--overlay"></div>*/}
          <div className="card-label">{el.label.toUpperCase()}</div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="homepage__title-area">
        <h1 className="homepage__title-h1">
          Simple & Quick Recpes
          <span className="dancng-font"> For Everyday Life</span>
        </h1>
      </div>
      <section className="homepage-first__container">
        <div className="homepage-first__wrapper">
          {homeSetionOne}
          {/*<Link
            // to show the item numbers on pages 2 and 3
            // to={`/recipe-pages/:${0}`}
            to={`/homapage-show-group/:postid`}
            className="recipes__list-link"
          >
            <div className="homepage-first__card" id="pasta">
              <div className="card__img card__img-1">
                <div className="card__img--overlay"></div>
                <p className="card-label">PASTA</p>
              </div>
            </div>
  </Link>
          
          <Link
            to={`/homapage-show-group/:postid`}
            className="recipes__list-link"
          >
            <div className="homepage-first__card" id="snacks">
              <div className="card__img card__img-2">
                <div className="card__img--overlay"></div>
                <p className="card-label">SNACKS</p>
              </div>
            </div>
          </Link>
          <Link
            to={`/homapage-show-group/:postid`}
            className="recipes__list-link"
          >
            <div className="homepage-first__card" id="oven">
              <div className="card__img card__img-3">
                <div className="card__img--overlay"></div>
                <p className="card-label">OVEN</p>
              </div>
            </div>
          </Link>
          <Link
            to={`/homapage-show-group/:postid`}
            className="recipes__list-link"
          >
            <div className="homepage-first__card" id="spicy">
              <div className="card__img card__img-4">
                <div className="card__img--overlay"></div>
                <p className="card-label">SPICY</p>
              </div>
            </div>
          </Link>
          */}
        </div>
        <div className="home__search-container">
          <SearchBar /> <SearchViewAllRecipes />
        </div>
      </section>

      <section className="homepage-second__container">
        <div className="homepage-second__wrapper">
          <h1 className="homepage-second__section-title">
            Latest Quick Recipes
          </h1>
          {/*Second section cards */}
          <div className="homepage-second__card-container">
            <div className="homepage-second__card">
              <div className="second-card__img-1">
                <Link
                  onClick={() => handleClick()}
                  to={`/recipe-pages/:${RECIPES[0].id - 1}`}
                  className=""
                >
                  <img
                    src={RECIPES[0].imagePath}
                    alt="img"
                    className="second-card__img second-card__img-1"
                  />
                </Link>
              </div>
              <div className="second-card__text ">
                <div className="second-card__title">{RECIPES[0].name}</div>
                <div className="second-card__description">
                  {RECIPES[0].steps}...
                </div>
                <Link
                  onClick={() => handleClick()}
                  to={`/recipe-pages/:${RECIPES[0].id - 1}`}
                  className="second-card__button-continue"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
            <div className="homepage-second__devider-line"></div>
            <div className="homepage-second__card">
              <div className="second-card__img-1">
                <Link
                  onClick={() => handleClick()}
                  to={`/recipe-pages/:${RECIPES[1].id - 1}`}
                  className=""
                >
                  <img
                    src={RECIPES[1].imagePath}
                    alt="img"
                    className="second-card__img second-card__img-1"
                  />
                </Link>
              </div>
              <div className="second-card__text ">
                <div className="second-card__title">{RECIPES[1].name}</div>
                <div className="second-card__description">
                  {RECIPES[1].steps.slice(0, 2)}...
                </div>
                <Link
                  onClick={() => handleClick()}
                  to={`/recipe-pages/:${RECIPES[1].id - 1}`}
                  className="second-card__button-continue"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
            <div className="homepage-second__devider-line"></div>
            <div className="homepage-second__card">
              <div className=" second-card__img-1">
                <Link
                  onClick={() => handleClick()}
                  to={`/recipe-pages/:${RECIPES[12].id - 1}`}
                  className=""
                >
                  <img
                    src={RECIPES[12].imagePath}
                    alt="img"
                    className="second-card__img second-card__img-1"
                  />
                </Link>
              </div>
              <div className="second-card__text ">
                <div className="second-card__title">{RECIPES[12].name}</div>
                <div className="second-card__description">
                  {RECIPES[12].steps.slice(0, 2)}...
                </div>
                <Link
                  onClick={() => handleClick()}
                  to={`/recipe-pages/:${RECIPES[12].id - 1}`}
                  className="second-card__button-continue"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
            <div className="homepage-second__devider-line"></div>
          </div>
        </div>
        <ScrollUpBtn />
      </section>
    </>
  );
};

export default HomePage;
