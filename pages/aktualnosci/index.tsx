import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchPostsPerPage } from "@/lib/pagination"
import Pagination from "@/components/Pagination/Pagination"
import Post from "@/components/Post/Post";


export default function NewsPage() {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>()
  
  useEffect(() => {
    fetchPostsPerPage(page, 3)
      .then(response => {
        const { postListRefactored, paginationData } = response
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