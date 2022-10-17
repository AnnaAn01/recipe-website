import { Link } from "react-router-dom";
import "./Recipes.css";
import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li
            key={number}
            className={
              number === currentPage ? "page-item activePage" : "page-item"
            }
          >
            <Link
              onClick={() => {
                paginate(number);
              }}
              // to={number === currentPage ? `/recipe/${currentPage} : /recipe`}
              to={`/recipe/page-${number}`}
              className={
                number === currentPage
                  ? "page-link  active-page-link"
                  : "page-link "
              }
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
