import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';

export default function SlugPage({ post }: { post: Post }) {
  return (
    <div>{post.title}</div>
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
  
    const response = await client.query({
        query: GET_POST_BY_URI,
        variables: {
          id: params.slug
        }
    })
  
    const post = response?.data?.post
    return {
      props: {
        post
      }
    }
  }
  
  export async function getStaticPaths(){
      
      const paths: string[] = []

      return {
          paths,
          fallback: 'blocking'
      }
}