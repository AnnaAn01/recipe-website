import React from "react";
import "./HomePage.css";

import SearchBar from "../SearchBar/SearchBar";

const HomePage = () => {
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
        <div className="home__search-container">
          <SearchBar />
        </div>
      </section>

      <section className="homepage-second__container">
        <div className="homepage-second__wrapper">
          <h1 className="homepage-second__section-title">
            Latest Quick Recipes
          </h1>
          {/*Second section cards */}
          <div className="homepage-second__card">
            <div className="second-card__img second-card__img-1">
              <div className="card__img--overlay"></div>
            </div>
            <div className="second-card__text ">
              <div className="second-card__title">Food name here</div>
              <div className="second-card__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <a href="#" className="second-card__button-continue">
                Continue Reading
              </a>
            </div>
          </div>
          <div className="homepage-second__devider-line"></div>
          <div className="homepage-second__card">
            <div className="second-card__img second-card__img-2">
              <div className="card__img--overlay"></div>
            </div>
            <div className="second-card__text ">
              <div className="second-card__title">Food name here</div>
              <div className="second-card__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum has been the industry's
                standard dummy.
              </div>
              <a href="#" className="second-card__button-continue">
                Continue Reading
              </a>
            </div>
          </div>
          <div className="homepage-second__devider-line"></div>
          <div className="homepage-second__card">
            <div className="second-card__img second-card__img-3">
              <div className="card__img--overlay"></div>
            </div>
            <div className="second-card__text ">
              <div className="second-card__title">Food name here</div>
              <div className="second-card__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </div>
              <a href="#" className="second-card__button-continue">
                Continue Reading
              </a>
            </div>
          </div>
          <div className="homepage-second__devider-line"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
