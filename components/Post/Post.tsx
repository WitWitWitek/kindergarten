import React from 'react';

import Link from 'next/link';
import { dateHandler, excerptHandler } from '@/lib/postDataHandler';

export default function Post({ post }: { post: Post }) {
  return (
    <div key={post.slug} className="post">
      <div className="post__thumbnail">
        {post.featuredImage.sourceUrl !== '' && <img src={post.featuredImage.sourceUrl} alt={post.featuredImage.title} />}
      </div>
      <div className="post__container">
        <h3 className="post__title">{post.title.substring(0, 25)}</h3>
        <time className="post__date">{dateHandler(post.date)}</time>
        <article className="post__excerpt" dangerouslySetInnerHTML={{ __html: excerptHandler(post.excerpt) }} />
        <Link href={`/aktualnosci/${post.slug}`} className="post__button">Przejdź</Link>
      </div>
    </div>
  );
}
