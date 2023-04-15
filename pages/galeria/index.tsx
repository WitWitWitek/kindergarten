import React from 'react';
import { gql } from '@apollo/client';
import client from '@/lib/apollo';
import getImagesGallery from '@/lib/photoGallery';
import ImageGallery from '@/components/ImageGallery/ImageGallery';

interface GalleryPageProps {
  page: Post,
  gallery: Image[]
}

export default function GalleryPage({ page, gallery }: GalleryPageProps) {
  return (
    <section className="gallery-page article">
      <h2 className="page-title">Galeria</h2>
      <article className="gallery-page__content" dangerouslySetInnerHTML={{ __html: page.content }} />
      {gallery && <ImageGallery images={gallery} />}
    </section>
  );
}

export async function getStaticProps() {
  const GET_GALLERY_PAGE = gql`
    query GetPostByURI($id: ID!) {
      page(id: $id, idType: URI) {
          content
          uri
        }
    }
  `;

  const gallery = await getImagesGallery('galeria', 'pages');

  const response = await client.query({
    query: GET_GALLERY_PAGE,
    variables: {
      id: 'galeria',
    },
  });

  const page = response?.data?.page;
  return {
    props: {
      page,
      gallery,
    },
  };
}
