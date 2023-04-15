type WPEndpoint = 'posts' | 'pages';

interface WordpressPhotoData {
  title: string,
  caption: string,
  full_image_url: string
}

const getImagesGallery = async (uri: string, endpoint: WPEndpoint = 'posts'): Promise<Image[] | null> => {
  const photoGalleryRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/${endpoint}?slug=${uri}`);
  const photoGalleryData = await photoGalleryRes.json();

  const { photoGallery } = photoGalleryData[0].acf || {};

  if (!photoGallery) {
    return null;
  }

  const postGallery: Image[] = await Promise.all(
    photoGallery.map(async (photo: WordpressPhotoData) => ({
      title: photo.title,
      caption: photo.caption,
      sourceUrl: photo.full_image_url,
    })),
  );

  return postGallery;
};

export default getImagesGallery;
