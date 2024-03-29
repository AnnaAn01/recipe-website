import { Link } from "react-router-dom";

const Posts = ({ posts, loading, setPostid, currentPage, postsPerPage }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleClick = (index, el) => {
    window.scrollTo(0, 0);
  };

  const postsList = posts.map((el, index) => {
    return (
      <Link
        // to show the item numbers on pages 2 and 3
        to={`/recipe-pages/:${
          el.id <= 12 ? index : 12 * (el.page - 1) + index
          // Or we can use the page I manually added to the json file
          // el.page === 1 ? index : 12 * (el.page - 1) + index
        }`}
        className="recipes__list-link"
        key={el.id}
      >
        <div
          name={el.name}
          key={el.index}
          className="recipes__list"
          id={el.id}
          src={el}
          onClick={(index) => handleClick(index, el)}
        >
          <img className="recipes__img" alt="food" src={el.imagePath} />
          <div className="recipes__list-name">{el.name}</div>
        </div>
      </Link>
    );
  });

  return <div className="recipes__list-parent">{postsList}</div>;
};

export default Posts;
