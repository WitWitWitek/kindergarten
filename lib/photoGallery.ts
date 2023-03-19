type WPEndpoint = 'posts' | 'pages'

export const getImagesGallery = async (uri: string, endpoint: WPEndpoint = 'posts'): Promise<Image[] | null> => {
    const photoGalleryRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/${endpoint}?slug=${uri}`)
    const photoGalleryData = await photoGalleryRes.json()

    const { photoGallery } = photoGalleryData[0]?.acf;

    const postGallery: Image[] = [];

    if (!photoGallery) {
        return null
    }

    for (const image of photoGallery) {
        postGallery.push({
            title: image.title,
            caption: image.caption,
            sourceUrl: image.full_image_url
        })
    }

    return postGallery;
}

