import Costs from '@/components/Home/Costs/Costs'
import React from 'react'
import { gql } from '@apollo/client'
import { client } from '@/lib/apollo'

type Props = {
  content: string,
  mediaItemUrl: string
}

export default function ForParentPage({ content, mediaItemUrl}: Props) {
  return (
    <section className='for-parent'>
      <article>
        <h3>Cennik</h3>
        <Costs />
      </article>
      <article>
        <h3>Zapisy</h3>
        <p>Zapisy 2023 / 2024 r.</p>
        <p>Zapraszamy dzieci w wieku od 2 i pół do 5 lat również o specjalnych potrzebach edukacyjnych.</p>
      </article>
      <article dangerouslySetInnerHTML={{__html: content}}></article>
      {mediaItemUrl && <a href={mediaItemUrl} target='_blank'>Regulamin</a>}
    </section>
  )
}

export async function getStaticProps() {
  const GET_PARENTSPAGE = gql`
      query GetPage {
        page(id: "dla-rodzica", idType: URI) {
          content
          uri
          file {
            file {
              mediaItemUrl
            }
          }
        }
    }
  `
  const response = await client.query({
    query: GET_PARENTSPAGE
  })
  
  const mediaItemUrl = response?.data?.page?.file?.file?.mediaItemUrl
  const content = response?.data?.page?.content

  return {
    props: {
      content,
      mediaItemUrl
    }
  }
}