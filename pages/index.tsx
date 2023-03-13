import Layout from "@/components/Layout/Layout"
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export default function Home({ homepage }: HomepageProps) {
  return (
    <Layout>
      <h1>Puchatek przedszkole</h1>
      <article className='content' dangerouslySetInnerHTML={{__html: homepage.content}}></article>
    </Layout>
  )
}

export async function getStaticProps() {
  const GET_HOMEPAGE = gql`
      query GetHomepage {
        page(id: "home-page", idType: URI) {
          content
        }
    }
  `
  const response = await client.query({
    query: GET_HOMEPAGE
  })

  return {
    props: {
      homepage: response?.data?.page
    }
  }

}

