import React from "react";
import "./AboutPage.css";
import { BsSearch } from "react-icons/bs";

import homepageMain1 from "../../images-src/homepage-main-1.jpg";

const AboutPage = () => {
  return (
    <>
      <section className="about__container">
        <div className="about__wrapper">
          <div className="about__photo-wrapper">
            <div className="about__img"></div>
          </div>
          <div className="about__text-wrapper">
            <div className="about__title">About me</div>
            <p className="about__first-p">Hi, my name is Anna.</p>
            <p className="about__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              ex officia? A quibusdam, illo consequatur nulla quaerat ex
              aliquid, sequi quia numquam id est. Mollitia quidem iure ipsa modi
              beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugit, ex officia? A quibusdam, illo consequatur nulla quaerat ex
              aliquid, sequi quia numquam id est. Mollitia quidem iure ipsa modi
              beatae?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
