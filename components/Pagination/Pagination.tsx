import next from "next";
import Link from "next/link"



export default function Pagination({ pagination, setPage }: PaginationProps ) {
    const { firstPage, previousPage, currentPage, nextPage, lastPage } = pagination
    return (
        <div className="news-page__pagination">
            <button className="news-page__pagination-button" onClick={() => setPage(firstPage)} disabled={currentPage === firstPage}>«</button> 
            <button className="news-page__pagination-button" onClick={() => setPage(previousPage)} disabled={currentPage === previousPage}>‹</button>
            <button className="news-page__pagination-button">{currentPage}</button>
            <button className="news-page__pagination-button" onClick={() => setPage(nextPage)} disabled={currentPage === nextPage}>›</button>
            <button className="news-page__pagination-button" onClick={() => setPage(lastPage)} disabled={currentPage === lastPage}>»</button>
        </div>
    )
}
