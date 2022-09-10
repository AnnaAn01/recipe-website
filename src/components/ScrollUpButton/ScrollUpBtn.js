import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import "./ScrollUpBtn.css";

const ScrollUpBtn = () => {
  const handleClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(handleClick);
      window.scrollTo(0, c - c / 26);
    }
  };

  return (
    <div className="scroll-up__btn" onClick={handleClick}>
      <BsArrowUpSquareFill />
    </div>
  );
};

export default ScrollUpBtn;
