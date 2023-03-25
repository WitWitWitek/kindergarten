import Link from "next/link"
import { useState } from "react"
import Post from "../../Post/Post"

type Props = {
    lastNews: Post[]
}

export default function HomeNews({ lastNews }: Props) {
  const [translateX, setTranslateX] = useState<number>(0)
  return (
    <>
        <div className='home-page__section-news'>
          <ul 
            className='home-page__section-news-container' 
            style={{transform: `translateX(-${translateX}%)`}}
          >
            {lastNews && lastNews.map(news => (
              <li key={news.uri} className='home-page__section-news-item'>
                <Post post={news} />
              </li>
            ))}
          </ul>
          <button 
            className="home-page__section-news-button"
            onClick={() => setTranslateX(prev => ((prev + 33.333) < 99.999) ? prev + 33.333 : prev)}
            disabled={translateX >= 66}
            >›</button>
          <button 
            className="home-page__section-news-button"
            onClick={() => setTranslateX(prev => ((prev - 33.333) >= 0) ? prev - 33.333 : prev)}
            disabled={translateX <= 0}
            >‹</button>
        </div>
        <Link href='/aktualnosci' className="home-page__section-news-more">Zobacz wszystkie aktualnośći</Link>
    </>
  )
}