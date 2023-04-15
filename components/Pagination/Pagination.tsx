import React from 'react';

export default function Pagination({ pagination, setPage }: PaginationProps) {
  const {
    firstPage, previousPage, currentPage, nextPage, lastPage,
  } = pagination;
  return (
    <div className="news-page__pagination">
      <button type="button" className="news-page__pagination-button" onClick={() => setPage(firstPage)} disabled={currentPage === firstPage}>«</button>
      <button type="button" className="news-page__pagination-button" onClick={() => setPage(previousPage)} disabled={currentPage === previousPage}>‹</button>
      <button type="button" className="news-page__pagination-button">{currentPage}</button>
      <button type="button" className="news-page__pagination-button" onClick={() => setPage(nextPage)} disabled={currentPage === nextPage}>›</button>
      <button type="button" className="news-page__pagination-button" onClick={() => setPage(lastPage)} disabled={currentPage === lastPage}>»</button>
    </div>
  );
}
