import { Link } from "react-router-dom";
import "./Recipes.css";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagnation-container">
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
