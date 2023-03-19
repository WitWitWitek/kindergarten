import { gql } from "@apollo/client"
import { client } from "@/lib/apollo"
import { getImagesGallery } from "@/lib/photoGallery"
import ImageGallery from "@/components/ImageGallery/ImageGallery";


// WEZ TO UPORZADKUJ TEN PROPS I TEN REACT FRAGMENT

export default function GalleryPage({ page, gallery }: { page: Post, gallery: Image[]}) {
  return (
    <section className='gallery-page'>
      <article className='gallery-page__content' dangerouslySetInnerHTML={{__html: page.content}}></article>
      {gallery && <ImageGallery images={gallery} />}
    </section>
  )
}

export async function getStaticProps() {
  const GET_GALLERY_PAGE = gql`
    query GetPostByURI($id: ID!) {
      page(id: $id, idType: URI) {
          content
          uri
        }
    }
  `

  const gallery = await getImagesGallery('galeria', 'pages')

  const response = await client.query({
      query: GET_GALLERY_PAGE,
      variables: {
        id: "galeria"
      }
  })

  const page = response?.data?.page
  return {
    props: {
      page,
      gallery
    }
  }
}
