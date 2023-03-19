import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import { getImagesGallery } from '@/lib/photoGallery';
import ImageGallery from '@/components/ImageGallery/ImageGallery';

interface SlugPageProps {
  post: Post,
  gallery: Image[]
}

export default function SlugPage({ post, gallery }: SlugPageProps) {
  return (
    <section className="slug-page">
      <h2 className="slug-page__title">{post.title}</h2>
      <article className='slug-page__content' dangerouslySetInnerHTML={{__html: post.content}}></article>
      {gallery && <ImageGallery images={gallery} />}
    </section>
  )
}


export async function getStaticProps({ params }: { params: { slug: string }}){
    const GET_POST_BY_URI = gql`
      query GetPostByURI($id: ID!) {
        post(id: $id, idType: SLUG) {
          title
          content
          date
          uri
          author {
            node {
              firstName
              lastName
            }
          }
          slug
          file {
            file {
              mediaItemUrl
            }
          }
        }
      }
    `

    const gallery = await getImagesGallery(params.slug)

    const response = await client.query({
        query: GET_POST_BY_URI,
        variables: {
          id: params.slug
        }
    })
  
    const post = response?.data?.post
    return {
      props: {
        post,
        gallery
      }
    }
}
  
  export async function getStaticPaths(){
      // add array !!
      const paths: string[] = []

      return {
          paths,
          fallback: 'blocking'
      }
}