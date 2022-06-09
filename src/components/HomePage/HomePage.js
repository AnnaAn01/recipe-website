// import React from "react";
// import "./HomePage.css";
// import bg1 from "../../images-src/background-concrete-wall.jpg";
// import homepageMain1 from "../../images-src/homepage-main-1.jpg";

// const HomePage = () => {
//   return (
//     <>
//       <div className="homepage">
//         <div className="homepage__container">
//           <section className="homepage__first-section">
//             <div className="homepage__title-area">
//               <h1 className="homepage__title-h1">
//                 SIMPLE AND QUICK RECIPES FOR EVERYDAY LIFE
//               </h1>
//             </div>
//             <div className="homepage__main-content">
//               <article className="homepage__main-content">
//                 <div className="main-content__wrapper">
//                   <img
//                     className="homepage__main-img"
//                     src={homepageMain1}
//                     alt=""
//                   />
//                   <img
//                     className="homepage__main-img"
//                     src={homepageMain1}
//                     alt=""
//                   />
//                   <img
//                     className="homepage__main-img"
//                     src={homepageMain1}
//                     alt=""
//                   />
//                   <img
//                     className="homepage__main-img"
//                     src={homepageMain1}
//                     alt=""
//                   />
//                 </div>
//               </article>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import "./HomePage.css";
import bg1 from "../../images-src/background-concrete-wall.jpg";
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
          <div className="homepage-first__card">
            <div className="card__img card__img-1">
              <div className="card__img--overlay"></div>
            </div>
          </div>
          <div className="homepage-first__card">
            <div className="card__img card__img-2">
              <div className="card__img--overlay"></div>
            </div>
          </div>
          <div className="homepage-first__card">
            <div className="card__img card__img-3">
              <div className="card__img--overlay"></div>
            </div>
          </div>
          <div className="homepage-first__card">
            <div className="card__img card__img-4">
              <div className="card__img--overlay"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
