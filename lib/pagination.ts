interface FetchedData {
  postListRefactored: Post[],
  paginationData: Pagination
}

interface WordpressPostData {
  date: string,
  link: string,
  slug: string,
  title: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
  content: string,
  featured_media: number,
}

const fetchPostsPerPage = async (page: number = 1, per_page: number = 3): Promise<FetchedData> => {
  let getPaginationResult = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${per_page}&page=1&order=desc`);
  const totalPostPages = +getPaginationResult.headers.get('x-wp-totalpages')! as number || 1;
  // ERROR HANDLING!
  if (page > 1 && page < +totalPostPages!) {
    getPaginationResult = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}&order=desc`);
  } else if (page >= +totalPostPages!) {
    getPaginationResult = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${per_page}&page=${totalPostPages}&order=desc`);
  }

  const postListPerPage = await getPaginationResult.json();

  const postListRefactored: Post[] = await Promise.all(
    postListPerPage.map(async (post: WordpressPostData) => ({
      date: post.date,
      uri: post.link,
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: '',
      featuredImage: await getFeaturedImage(post.featured_media),
    })),
  );

  const currentPage = page;
  const previousPage = ((page - 1) <= 1) ? 1 : (page - 1);
  const nextPage = ((page + 1) >= totalPostPages) ? totalPostPages : (page + 1);

  const paginationData = {
    firstPage: 1,
    previousPage,
    currentPage,
    nextPage,
    lastPage: totalPostPages,
  };
  return {
    postListRefactored,
    paginationData,
  };
};

export default fetchPostsPerPage;

const getFeaturedImage = async (id: number) => fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/media/${id}`)
  .then((res) => res.json())
  .then((data) => ({
    sourceUrl: data?.source_url || '',
    title: data?.title?.rendered || '',
    caption: data?.caption?.rendered || '',
  }));
