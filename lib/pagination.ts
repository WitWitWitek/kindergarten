interface fetchedData {
    postListRefactored: Post[],
    paginationData: Pagination
}

export const fetchPostsPerPage = async (page: number = 1, per_page: number = 3): Promise<fetchedData>  => {
    let getPaginationResult = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${per_page}&page=1&order=desc`);
    const totalPostPages = +getPaginationResult.headers.get('x-wp-totalpages')! as number || 1
    // ERROR HANDLING!
    if (page > 1 && page < +totalPostPages!) {
        getPaginationResult = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}&order=desc`);
    } else if (page >= +totalPostPages!) {
        getPaginationResult = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${per_page}&page=${totalPostPages}&order=desc`);
    }
    
    const postListPerPage = await getPaginationResult.json()

    const postListRefactored = []

    for (const post of postListPerPage) {
        postListRefactored.push({
            date: post.date,
            uri: post.link,
            slug: post.slug,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: '',
            featuredImage: {
                node: {
                    altText: 'string',
                    sourceUrl: 'string',
                }
            }
        })
    }
    
    const currentPage = page;
    const previousPage = ((page - 1) <= 1) ? 1 : ( page - 1);
    const nextPage = ((page + 1) >= totalPostPages) ? totalPostPages : (page + 1);
    
    const paginationData = {
        firstPage: 1,
        previousPage,
        currentPage,
        nextPage,
        lastPage: totalPostPages,
    }
    return {
        postListRefactored,
        paginationData
    }
}