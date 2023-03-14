import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import HomeBanner from '@/components/HomeBanner/HomeBanner';

export default function Home({ homepage }: HomepageProps) {
  return (
    <>
      <HomeBanner />
      <h1 id='main-title'>Przedszkole Chatka Puchatka</h1>
      <article className='content' dangerouslySetInnerHTML={{__html: homepage.content}}></article>
      <article className='content' dangerouslySetInnerHTML={{__html: homepage.content}}></article>
      <article className='content' dangerouslySetInnerHTML={{__html: homepage.content}}></article>
    </>
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

