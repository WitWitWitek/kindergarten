interface HomepageProps {
    homepage: {
        content: string
    }
}

interface NavmenuProps {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

interface NewsProps {
    posts: Post[],
    pagination: Pagination
}

interface Pagination {
    firstPage: number,
    previousPage: number,
    currentPage: number,
    nextPage:  number,
    lastPage: number,
}

interface PaginationProps {
    pagination: Pagination,
    setPage: Dispatch<SetStateAction<number>>
}

interface Post {
    uri: string,
    slug: string,
    date: string,
    title: string,
    content: string,
    excerpt: string,
    featuredImage: {
        node: {
            altText: string,
            sourceUrl: string,
        }
    }
}

interface Image {
    title: string,
    caption: string,
    sourceUrl: string
}