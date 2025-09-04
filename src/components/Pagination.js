import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Pagination.css"

const Pagination = () => {
  const { pageCount, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className="footer">
      <div>
        {pageCount > 1 && (
          <button
            className="previous-btn"
            onClick={() => handlePageChange(pageCount - 1)}
          >
            Previous
          </button>
        )}
        {pageCount < totalPages && (
          <button
            className="next-btn"
            onClick={() => handlePageChange(pageCount + 1)}
          >
            Next
          </button>
        )}
      </div>
      <p>
        Page <span>{pageCount}</span> of <span>{totalPages}</span>
      </p>
    </div>
  );
};

export default Pagination;
