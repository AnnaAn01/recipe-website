// import React from "react";
// import "./Recipes.css";
// import SearchBar from "../SearchBar/SearchBar";
// import RECIPES from "../SearchBar/RECIPES.json";

// const Recipes = () => {
//   return (
//     <>
//       <div className="recipes__container">
//         <div className="recipes__wrapper">
//           <div className="recipes__title">Find our recipes below</div>
//           <div className="recipes-search__wrapper">
//             <SearchBar />
//           </div>
//           <div className="recipes__all-container">
//             <div className="recipes__all-wrapper">
//               <div className="recipes__all-title">ALL RECIPES</div>
//               <div className="recipes__all-list-container">
//                 <div className="recipes__all-list-wrapper">
//                   <div class="recipes__list-parent">
//                     <div class="recipes__list recipes__list-1"> </div>
//                     <div class="recipes__list recipes__list-2"> </div>
//                     <div class="recipes__list recipes__list-3"> </div>
//                     <div class="recipes__list recipes__list-4"> </div>
//                     <div class="recipes__list recipes__list-5"> </div>
//                     <div class="recipes__list recipes__list-6"> </div>
//                     <div class="recipes__list recipes__list-7"> </div>
//                     <div class="recipes__list recipes__list-8"> </div>
//                     <div class="recipes__list recipes__list-9"> </div>
//                     <div class="recipes__list recipes__list-10"> </div>
//                     <div class="recipes__list recipes__list-11"> </div>
//                     <div class="recipes__list recipes__list-12"> </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Recipes;

import React from "react";
import "./Recipes.css";
import SearchBar from "../SearchBar/SearchBar";
import RECIPES from "../SearchBar/RECIPES.json";
import MOCK_DATA from "../SearchBar/MOCK_DATA.json";
import { MdRestaurantMenu } from "react-icons/md";

const Recipes = () => {
  return (
    <>
      <div className="recipes__container">
        <div className="recipes__wrapper">
          <div className="recipes__title">Find our recipes below</div>
          <div className="recipes-search__wrapper">
            <SearchBar />
          </div>
          <div className="recipes__all-container">
            <div className="recipes__all-wrapper">
              <div className="recipes__all-title">
                <MdRestaurantMenu className="recipe__menu-icon" /> ALL RECIPES
              </div>
              <div className="recipes__all-list-container">
                <div className="recipes__all-list-wrapper">
                  <div className="recipes__list-parent">
                    {RECIPES.map((el, index) => {
                      return (
                        <div
                          key={index}
                          className="recipes__list"
                          id={`recipes__list-${index + 1}`}
                        >
                          <img
                            className="recipes__img"
                            alt="food"
                            // src={el.imageURL}
                            src={el.imagePath}
                          />
                          <div className="recipes__list-name">{el.name}</div>
                        </div>
                      );
                    })}
                    {/*{console.log(RECIPES[0].name)}*/}
                    {/*{console.log(RECIPES[0].imageURL)}*/}

                    {/* <div className="recipes__list recipes__list-1"></div>
                    <div className="recipes__list recipes__list-2">
                      {RECIPES[0].name}
                    </div>
                    <div className="recipes__list recipes__list-3"> </div>
                    <div className="recipes__list recipes__list-4"> </div>
                    <div className="recipes__list recipes__list-5"> </div>
                    <div className="recipes__list recipes__list-6"> </div>
                    <div className="recipes__list recipes__list-7"> </div>
                    <div className="recipes__list recipes__list-8"> </div>
                    <div className="recipes__list recipes__list-9"> </div>
                    <div className="recipes__list recipes__list-10"> </div>
                    <div className="recipes__list recipes__list-11"> </div>
                <div className="recipes__list recipes__list-12"> </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
