import React from "react";
import "./AboutPage.css";
import SearchBar from "../SearchBar/SearchBar";

// import aboutImg from "./about-img-1.jpg";
import aboutImg from "../../images-src/about-img-1.jpg";
// import aboutImg from "../../images-src/homepage-main-4.jpg";

const AboutPage = () => {
  return (
    <>
      <section className="about__container">
        <div className="about__wrapper">
          <div className="about__photo-wrapper">
            {/*<img src="homepageMain1" alt="about me" className="about__img" />*/}
            <img src={aboutImg} alt="about me" className="about__img" />
            {/*<div className="about__img"></div>*/}
          </div>
          <div className="about__text-wrapper">
            <div className="about__text-title">About me</div>
            <p className="about__first-p">Hi, my name is Anna.</p>
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
            <SearchBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
