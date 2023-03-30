import { useEffect, useState } from "react"
import Pagination from "@/components/Pagination/Pagination"
import Post from "@/components/Post/Post";

export default function NewsPage() {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>()
  
  useEffect(() => {
    const per_page = window.innerWidth >= 1024 ? 6 : 3 || 3
    fetch(`/api/postsPagination?per_page=${per_page}&page=${page}&order=desc`)
      .then(response => response.json())
      .then(data => {
        const { postListRefactored, paginationData } = data;
        setPosts(postListRefactored)
        setPagination(paginationData)
      })
  }, [page])

  if (!pagination || !posts) {
    return <p className="spinner">Loading...</p>
  }

  if (posts.length === 0) {
    return <p>No posts so far.</p>
  }
 
  return (
    <section className="news-page">
      <h2 className='page-title'>Aktualności</h2>
      <ul className="news-page__container">
        {posts.map(post => <Post key={post.slug} post={post} />)}
      </ul>
      <Pagination pagination={pagination} setPage={setPage} />
    </section>
  )
}