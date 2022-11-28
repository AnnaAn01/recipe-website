// import React, { useRef } from "react";
// // import { SubHeading } from '../../components';
// // import { images } from "../../constants";
// import {
//   BsInstagram,
//   BsArrowLeftShort,
//   BsArrowRightShort,
// } from "react-icons/bs";

// import "./Carousel.css";

// const galleryImages = [
//   "recipe-img/homepage-pasta.jpg",
//   "recipe-img/homepage-main-6.jpg",
//   "recipe-img/homepage-main-7.jpg",
//   "recipe-img/homepage-main-8.jpg",
//   "recipe-img/curried-chicken-salad.jpg",
//   "recipe-img/curried-chicken-salad.jpg",
// ];

// // const galleryImages = [
// //   images.gallery01,
// //   images.gallery02,
// //   images.gallery03,
// //   images.gallery04,
// // ];

// const Carousel = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     //destructuring current below
//     const { current } = scrollRef;

//     if (direction === "left") {
//       current.scrollLeft -= 300;
//     } else {
//       current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className="app__gallery flex__center">
//       <div className="app__gallery-images">
//         <div className="app__gallery-images_container" ref={scrollRef}>
//           {galleryImages.map((image, index) => (
//             <div
//               className="app__gallery-images_card flex__center"
//               key={`gallery_image-${index + 1}`}
//             >
//               <img src={image} alt="gallery" />
//               <BsInstagram className="gallery__image-icon" />
//             </div>
//           ))}
//         </div>
//         <div className="app__gallery-images_arrows">
//           <BsArrowLeftShort
//             className="gallery__arrow-icon"
//             onClick={() => scroll("left")}
//           />
//           <BsArrowRightShort
//             className="gallery__arrow-icon"
//             onClick={() => scroll("right")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// import React from "react";
// import Slider from "react-slick";

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }

// import React, { useState } from "react";

// function Carousel() {
//   const initalState = [
//     { idx: 1, pos: 1, text: "1", active: true },
//     { idx: 2, pos: 2, text: "2", active: true },
//     { idx: 3, pos: 3, text: "3", active: true },
//     { idx: 4, pos: 4, text: "4", active: true },
//     { idx: 5, pos: 5, text: "5", active: false },
//   ];

//   const slides = [
//     { url: "recipe-img/homepage-pasta.jpg", id: 0 },
//     { url: "recipe-img/homepage-main-6.jpg", id: 1 },
//     { url: "recipe-img/homepage-main-7.jpg", id: 3 },
//     { url: "recipe-img/homepage-main-8.jpg", id: 4 },
//     { url: "recipe-img/curried-chicken-salad.jpg", id: 5 },
//     { url: "recipe-img/curried-chicken-salad.jpg", id: 6 },
//   ];

//   const [cards, setCards] = useState(initalState);

//   const handleLeftClick = (isLeft) => {
//     const prevState = [...cards];
//     // find next inactive card index - top
//     const nextCardIdx = prevState
//       .filter((ft) => ft.active === true)
//       .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
//     // reset
//     prevState.find((f) => f.active === false).active = true;
//     // update
//     prevState.find((f) => f.idx === nextCardIdx).active = false;
//     // maximize pos
//     prevState.find((f) => f.idx === nextCardIdx).pos =
//       Math.max.apply(
//         null,
//         prevState.map(function (o) {
//           return o.pos;
//         })
//       ) + 1;

//     // update state
//     setCards(prevState);
//   };

//   const handleRightClick = () => {
//     const prevState = [...cards];
//     // find next inactive card index - bottom
//     const nextCardIdx = prevState
//       .filter((ft) => ft.active === true)
//       .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
//       .pop(1).idx;
//     // minimize pos
//     prevState.find((f) => f.active === false).pos =
//       Math.min.apply(
//         null,
//         prevState.map(function (o) {
//           return o.pos;
//         })
//       ) - 1;
//     // reset
//     prevState.find((f) => f.active === false).active = true;
//     // update
//     prevState.find((f) => f.idx === nextCardIdx).active = false;

//     // update state
//     setCards(prevState);
//   };

//   return (
//     <>
//       <div
//         className="text-xl md:text-5xl cursor-pointer"
//         onClick={() => handleLeftClick()}
//       >
//         {"<"}
//       </div>
//       {cards
//         .filter((f) => f.active === true)
//         .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
//         .map((card, index) => (
//           <img
//             src={slides[index].url}
//             key={index}
//             prop={card.text}
//             className="homepage-first__card"
//           ></img>
//         ))}
//       <div
//         className="text-xl md:text-5xl cursor-pointer"
//         onClick={() => handleRightClick()}
//       >
//         {">"}
//       </div>
//     </>
//   );
// }

// export default Carousel;

import React, { useState } from "react";
import Card from "./Card";
import { initalState } from "./data";

function Carousel() {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <>
      <div
        className="carousel-cont text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        {"<"}
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card key={index} prop={card.img} />
        ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleRightClick()}
      >
        {">"}
      </div>
    </>
  );
}

export default Carousel;
