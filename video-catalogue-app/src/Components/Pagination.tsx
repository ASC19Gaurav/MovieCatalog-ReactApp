import React from "react";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageNumbersToShow = 5; // Show only 5 pages at a time

  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  // Adjust startPage if near the end
  if (endPage - startPage < maxPageNumbersToShow - 1) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="pagination-container">
      {/* Previous Button */}
      <button
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        «
      </button>

      {/* First Page Button (if needed) */}
      {startPage > 1 && (
        <>
          <button className="pagination-button" onClick={() => onPageChange(1)}>
            1
          </button>
          {startPage > 2 && <span className="pagination-ellipsis">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`pagination-button ${currentPage === num ? "active" : ""}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      {/* Last Page Button (if needed) */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="pagination-ellipsis">...</span>}
          <button className="pagination-button" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
