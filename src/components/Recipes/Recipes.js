import React, { useState, useEffect } from "react";
import "./Recipes.css";
import SearchBar from "../SearchBar/SearchBar";
import RECIPES from "../SearchBar/RECIPES.json";
import MOCK_DATA from "../SearchBar/MOCK_DATA.json";
import { MdRestaurantMenu } from "react-icons/md";
import Posts from "./Posts";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import RecipePages from "./RecipePages/RecipePages";

const Recipes = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    // const res = await axios.get("RECIPES.json");
    setPosts(RECIPES);
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

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
                  <Link to="/recipe-pages">
                    <Posts posts={currentPosts} loading={loading}></Posts>
                  </Link>

                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                  />
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

// import React, { useState, useEffect } from "react";
// import "./Recipes.css";
// import SearchBar from "../SearchBar/SearchBar";
// import RECIPES from "../SearchBar/RECIPES.json";
// import MOCK_DATA from "../SearchBar/MOCK_DATA.json";
// import { MdRestaurantMenu } from "react-icons/md";
// import Posts from "./Posts";
// import Pagination from "./Pagination";
// import ReactPaginate from "react-paginate";

// const Recipes = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(12);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     setLoading(true);
//     // const res = await axios.get("RECIPES.json");
//     setPosts(RECIPES);
//     setLoading(false);
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPage = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

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
//               <div className="recipes__all-title">
//                 <MdRestaurantMenu className="recipe__menu-icon" /> ALL RECIPES
//               </div>
//               <div className="recipes__all-list-container">
//                 <div className="recipes__all-list-wrapper">
//                   {/*<Posts posts={currentPosts} />*/}
//                   <Posts posts={currentPosts} loading={loading} />

//                   <Pagination
//                     postsPerPage={postsPerPage}
//                     totalPosts={posts.length}
//                     paginate={paginate}
//                   />
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
