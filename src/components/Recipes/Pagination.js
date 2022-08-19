// import { Link } from "react-router-dom";
// import "./Recipes.css";
// import React from "react";

// const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="pagination-container">
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <Link
//               onClick={() => paginate(number)}
//               to="/recipe"
//               className="page-link"
//             >
//               {number}
//             </Link>
//             {console.log("this", number)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;

import { Link } from "react-router-dom";
import "./Recipes.css";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  // console.log(pageNumbers);
  // console.log(currentPage);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to="/recipe"
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

// import { Link } from "react-router-dom";
// import "./Recipes.css";
// import React from "react";
// import ReactPaginate from "react-paginate";

// const Pagination = ({
//   posts,
//   postsPerPage,
//   totalPosts,
//   paginate,
//   setCurrentPage,
//   currentPage,
// }) => {
//   // const pageNumbers = [];
//   const pageNumbers = Math.ceil(totalPosts / postsPerPage);
//   // console.log(pageNumbers);
//   // console.log(totalPosts);
//   // console.log(postsPerPage);

//   // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//   //   pageNumbers.push(i);
//   // }

//   const changePage = ({ selected }) => {
//     paginate(selected);
//   };

//   return (
//     <ReactPaginate
//       previousLabel={"Previous"}
//       nextLabel={"Next"}
//       pageCount={pageNumbers}
//       onPageChange={changePage}
//       containerClassName={"paginationBttns"}
//       previousLinkClassName={"previousBttn"}
//       nextLinkClassName={"nextBttn"}
//       disabledClassName={"paginationDisabled"}
//       activeClassName={"paginationActive"}
//     />
//     // <div className="pagination-container">
//     //   <ul className="pagination">
//     //     {pageNumbers.map((number) => (
//     //       <li key={number} className="page-item">
//     //         <Link
//     //           onClick={() => paginate(number)}
//     //           to="/recipe"
//     //           className="page-link"
//     //         >
//     //           {number}
//     //         </Link>
//     //         {console.log("this", number)}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// };

// export default Pagination;
