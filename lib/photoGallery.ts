export const getImagesGallery = async (uri: string): Promise<void> => {
    const photoGalleryRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${uri}`)
    const photoGalleryData = await photoGalleryRes.json()

    // console.log(photoGalleryRes);
}

