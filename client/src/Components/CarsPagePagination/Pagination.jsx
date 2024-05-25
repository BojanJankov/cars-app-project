import "./Pagination.css";

function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="paginationDiv">
      <ul className="pagination">
        {pages.map((page, index) => {
          return (
            <li
              className="pagination-item"
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
