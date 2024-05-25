import "./Pagination.css";

function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  prevPage,
  nextPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="paginationDiv">
      <ul className="pagination">
        <li className="pagination-item" onClick={() => prevPage()}>
          Prev
        </li>
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
        <li className="pagination-item" onClick={() => nextPage()}>
          Next
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
