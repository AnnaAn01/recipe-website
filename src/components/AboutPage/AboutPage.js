import React from "react";
import "./AboutPage.css";
import SearchBar from "../SearchBar/SearchBar";
import aboutImg from "../../images-src/about-img-1.jpg";
import SearchViewAllRecipes from "../SearchBar/SearchViewAllRecipes";

const AboutPage = () => {
  return (
    <>
      <section className="about__container">
        <div className="about__wrapper">
          <div className="about__photo-wrapper">
            <img src={aboutImg} alt="about me" className="about__img" />
          </div>
          <div className="about__text-wrapper">
            <div className="about__text-title">About me</div>
            <p className="about__first-p">
              Hi, my name is <span className="about__first-p-name">Anna.</span>
            </p>
            <p className="about__text">
              <p className="about__text-1 about__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                ex officia? A quibusdam.
              </p>
              <p className="about__text-2 about__text">
                Mollitia quidem iure ipsa modi beatae? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.Mollitia quidem iure ipsa modi
                beatae? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.
              </p>
            </p>
          </div>
        </div>
        <div className="home__search-container">
          <SearchBar homepage="true" />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
