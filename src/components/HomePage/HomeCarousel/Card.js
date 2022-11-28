import React from "react";
import { useState } from "react";
import "./Carousel.css";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
      card"
    >
      <div onClick={handleClick} className="flex">
        {/*<div className={editable ? "opacity-0" : "opacity-800"}>{prop}</div>*/}
        {/*<div className="text-sm cursor-pointer text-gray-500">
          {editable ? "close | update" : "edit"}
  </div>*/}
        <img src={prop} className="carousel__card-img" />
      </div>
    </div>
  );
}

export default Card;
