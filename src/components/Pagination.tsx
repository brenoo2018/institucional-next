'use client';

import Link from 'next/link';

type PaginationProps = {
  page: number;
  per_page: number;
  total: number;
};

export default function Pagination({ page, per_page, total }: PaginationProps) {
  const totalPages = Math.ceil(total / per_page);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber == page ? 'active' : ''}`}
            >
              <Link
                href={`/blog?page=${pageNumber}&per_page=${per_page}`}
                className="page-link"
              >
                {pageNumber}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
