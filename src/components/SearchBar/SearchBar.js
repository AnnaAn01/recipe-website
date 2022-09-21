// import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import "./SearchBar.css";
// import MOCK_DATA from "./MOCK_DATA.json";
// import { Link } from "react-router-dom";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="search-container">
//       <BsSearch className="search-icon" />
//       <input
//         className="search-input"
//         type="text"
//         placeholder="Search our recipes"
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />

//       <span className="search__or-span">OR</span>
//       <Link to="recipes" className="search__view-all-link">
//         <span className="search__view-all-span">View all Recipes</span>
//       </Link>
//       <div className="search__value">
//         {MOCK_DATA.filter((val) => {
//           if (searchTerm === "") {
//             return "";
//           } else if (
//             val.first_name
//               .toLocaleLowerCase()
//               .includes(searchTerm.toLocaleLowerCase())
//           ) {
//             return <Link to="/about">{val}</Link>;
//           }
//         }).map((val, key) => {
//           return (
//             <div className="search__value-div" key={key}>
//               <p className="search__value-p">
//                 <Link to="/about" className="search__value-link-returned">
//                   {val.first_name}
//                 </Link>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import "./SearchBar.css";
// import RECIPES from "./RECIPES.json";
// import { Link } from "react-router-dom";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="search-container">
//       <BsSearch className="search-icon" />
//       <input
//         className="search-input"
//         type="text"
//         placeholder="Search our recipes"
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />

//       <span className="search__or-span">OR</span>
//       <Link to="recipes" className="search__view-all-link">
//         <span className="search__view-all-span">View all Recipes</span>
//       </Link>
//       <div className="search__value">
//         {RECIPES.filter((val) => {
//           if (searchTerm === "") {
//             return "";
//           } else if (
//             val.name
//               .toLocaleLowerCase()
//               .includes(searchTerm.toLocaleLowerCase()) ||
//             val.ingredients[0].name
//               .toLocaleLowerCase()
//               .includes(searchTerm.toLocaleLowerCase())
//           ) {
//             return <Link to="/about">{val}</Link>;
//           }
//         }).map((val, key) => {
//           return (
//             <div className="search__value-div" key={key}>
//               <p className="search__value-p">
//                 <Link to="/about" className="search__value-link-returned">
//                   {val.name}
//                 </Link>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import "./SearchBar.css";
// import RECIPES from "./RECIPES.json";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { ImSpoonKnife } from "react-icons/im";
// import SearchViewAllRecipes from "./SearchViewAllRecipes";

// const SearchBar = (posts) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="search-container">
//       <div className="search-wrapper">
//         <BsSearch className="search-icon" />
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search our recipes"
//           onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }}
//           autofocus="autofocus"
//         />

//         {/* Previous View all recipes code below*/}

//         <span className="search__or-span">OR</span>
//         <Link to="/recipe" className="search__view-all-link">
//           <span className="search__view-all-span">
//             View all Recipes nside code
//           </span>
//         </Link>

//         {/* until here*/}
//         <div className="search__value">
//           {RECIPES.filter((val) => {
//             if (searchTerm === "") {
//               return "";
//             } else if (
//               val.name
//                 .toLocaleLowerCase()
//                 .includes(searchTerm.toLocaleLowerCase())
//             ) {
//               return <Link to="/about">{val}</Link>;
//             }
//             if (
//               val.ingredients.forEach((el, index) => {
//                 el.name
//                   .toLocaleLowerCase()
//                   .includes(searchTerm.toLocaleLowerCase());
//                 // console.log(el.type);
//               })
//             ) {
//               return <Link to="/about">{val}</Link>;
//             }
//             return "";
//           }).map((val, key) => {
//             return (
//               <div className="search__value-div" key={key}>
//                 <div className="search__value-wrapper">
//                   <Link
//                     to={`/recipe-pages/:${val.id - 1}`}
//                     className="search__value-link-returned"
//                   >
//                     <div className="search__value-name">
//                       <ImSpoonKnife className="search__spoon-icon" /> {val.name}
//                     </div>
//                     <div className="search__value-img-wrapper">
//                       <img
//                         className="search__value-img"
//                         alt="food"
//                         src={val.imagePath}
//                       />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import RECIPES from "./RECIPES.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
      <BsSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search our recipes"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <span
        className={
          props.homepage === "true"
            ? "show-all-recipe-btn"
            : "hide-all-recipe-btn"
        }
      >
        <span className="search__or-span">OR</span>
        <Link to="/recipe" className="search__view-all-link">
          <span className="search__view-all-span">View all Recipes</span>
        </Link>
      </span>
      <div className="search__value">
        {RECIPES.filter((val) => {
          if (searchTerm === "") {
            return "";
          } else if (
            val.name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return <Link to="/about">{val}</Link>;
          }
          if (
            val.ingredients.forEach((el, index) => {
              el.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase());
              // console.log(el.type);
            })
          ) {
            return <Link to="/about">{val}</Link>;
          }
          return "";
        }).map((val, key) => {
          return (
            <div className="search__value-div" key={key}>
              <div className="search__value-wrapper">
                <Link
                  to={`/recipe-pages/:${val.id - 1}`}
                  className="search__value-link-returned"
                >
                  <div className="search__value-name">
                    <ImSpoonKnife className="search__spoon-icon" /> {val.name}
                  </div>
                  <div className="search__value-img-wrapper">
                    <img
                      className="search__value-img"
                      alt="food"
                      src={val.imagePath}
                    />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
