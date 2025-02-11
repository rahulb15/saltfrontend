
// components/common/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-wrapper text-center">
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`page-link ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;