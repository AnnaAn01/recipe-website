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

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import RECIPES from "./RECIPES.json";
import { Link } from "react-router-dom";
import Img1 from "../../images-src/recipe-img/big-night-pizza-1.jpg";

const SearchBar = () => {
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

      <span className="search__or-span">OR</span>
      <Link to="/recipe" className="search__view-all-link">
        <span className="search__view-all-span">View all Recipes</span>
      </Link>
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
              <p className="search__value-p">
                <Link to="/about" className="search__value-link-returned">
                  {val.name}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
