import Costs from '@/components/Home/Costs/Costs'
import React from 'react'
import { gql } from '@apollo/client'
import { client } from '@/lib/apollo'
import File from '@/components/File/File'

type Props = {
  content: string,
  mediaItemUrl: string
}

export default function ForParentPage({ content, mediaItemUrl}: Props) {
  return (
    <section className='for-parent'>
      <h2 className='page-title'>Dla rodzica</h2>
      <article className='article'>
        <h3 className='article-title'>Cennik</h3>
        <Costs />
      </article>
      <article className='article'>
        <h3 className='article-title'>Zapisy</h3>
        <p>Zapisy 2023 / 2024 r.</p>
        <p>Zapraszamy dzieci w wieku od 2 i pół do 5 lat również o specjalnych potrzebach edukacyjnych.</p>
      </article>
      <article className='article' dangerouslySetInnerHTML={{__html: content}}></article>
      {mediaItemUrl && (
        <article className='article'>
          <File href={mediaItemUrl}>Regulamin</File>
        </article>
      )}
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