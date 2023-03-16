import Link from "next/link"
import { dateHandler, excerptHandler } from "@/lib/postDataHandler"
export default function Post( { post }: { post: Post} ) {
  return (
    <div key={post.slug} className="news-page__post">
            <h3 className="news-page__title">{post.title.substring(0, 25)}</h3>
            <time className="news-page__date">{dateHandler(post.date)}</time>
            <article className="news-page__excerpt" dangerouslySetInnerHTML={{__html: excerptHandler(post.excerpt)}}></article>
            <Link href={`/aktualnosci/${post.slug}`} className="news-page__button">Przejdź</Link>
    </div>
  )
}
