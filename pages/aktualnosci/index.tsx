import { useEffect, useState } from "react"
import Pagination from "@/components/Pagination/Pagination"
import Post from "@/components/Post/Post";


export default function NewsPage() {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>()
  
  useEffect(() => {
    fetch(`/api/postsPagination?per_page=3&page=${page}&order=desc`)
      .then(response => response.json())
      .then(data => {
        const { postListRefactored, paginationData } = data;
        setPosts(postListRefactored)
        setPagination(paginationData)
      })
  }, [page])

  if (!pagination || !posts) {
    return <p className="news-page__title">Loading...</p>
  }

  if (posts.length === 0) {
    return <p>No posts so far.</p>
  }
 
  return (
    <section className="news-page">
      {posts.map(post => <Post key={post.slug} post={post} />)}
      <Pagination pagination={pagination} setPage={setPage} />
    </section>
  )
}