import React, { useState } from "react";
import "./HomeCarousel.css";

const HomeCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel__container">
      <div className="carousel__arrow-left" onClick={goToPrevious}>
        &#60;
      </div>
      <div className="carousel__arrow-right" onClick={goToNext}>
        &#62;
      </div>

      <img
        src={slides[currentIndex].url}
        alt=""
        className="carousel__img-wrapper"
      />
      <img
        src={slides[currentIndex + 1].url}
        alt=""
        className="carousel__img-wrapper"
      />
      <img
        src={slides[currentIndex + 2].url}
        alt=""
        className="carousel__img-wrapper"
      />
      <img
        src={slides[currentIndex + 3].url}
        alt=""
        className="carousel__img-wrapper"
      />
    </div>
  );
};

export default HomeCarousel;
