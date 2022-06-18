import React from "react";
import "./HomePage.css";
import { BsSearch } from "react-icons/bs";

import homepageMain1 from "../../images-src/homepage-main-1.jpg";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage__title-area">
          <h1 className="homepage__title-h1">
            SIMPLE AND QUICK RECIPES FOR EVERYDAY LIFE
          </h1>
        </div>
        <section className="homepage-first__container">
          <div className="homepage-first__wrapper">
            <div className="homepage-first__card">
              <div className="card__img card__img-1">
                <div className="card__img--overlay"></div>
                <p className="card-label">PASTA</p>
              </div>
            </div>
            <div className="homepage-first__card">
              <div className="card__img card__img-2">
                <div className="card__img--overlay"></div>
                <p className="card-label">SNACKS</p>
              </div>
            </div>
            <div className="homepage-first__card">
              <div className="card__img card__img-3">
                <div className="card__img--overlay"></div>
                <p className="card-label">OVEN</p>
              </div>
            </div>
            <div className="homepage-first__card">
              <div className="card__img card__img-4">
                <div className="card__img--overlay"></div>
                <p className="card-label">SPICY</p>
              </div>
            </div>
          </div>
          <div className="search-container">
            <BsSearch className="search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search our recipes"
            />
            <span className="search__or-span">OR</span>
            <span className="search__view-all-span">View all Recipes</span>
          </div>
        </section>
        <section className="homepage-second__container">
          <div className="homepage-second__wrapper">
            <div className="homepage-second__card">
              <div className="second-card__img second-card__img-1"></div>
              <div className="second-card__text ">Food name here</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
