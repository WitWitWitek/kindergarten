import React from 'react';
import { gql } from '@apollo/client';
import fetchPostsPerPage from '@/lib/pagination';
import Offer from '@/components/Home/Offer/Offer';
import HomeNews from '@/components/Home/HomeNews/HomeNews';
import Costs from '@/components/Home/Costs/Costs';
import Link from 'next/link';
import client from '../lib/apollo';

export default function HomePage({ homepage, lastNews }: HomepageProps) {
  return (
    <section className="home-page">
      <h2 id="main-title" className="page-title">
        Przedszkole
        <br />
        Chatka Puchatka
      </h2>

      <article className="article">
        <h3 className="article-title">Program dydaktyczny</h3>
        <p>
          Program dydaktyczny przedszkola jest tak ustalony,
          aby zapewnić dzieciom najlepsze przygotowanie do dalszej
          edukacji szkolnej, nie zapominając o utrzymaniu równowagi pomiędzy nauką a zabawą.
        </p>
        <p>
          Rozwijamy ciekawość poznawczą, aktywność i samodzielność
          przedszkolaków, a także przyswajanie wiadomości i kształtowanie
          umiejętności, zapewniając dziecku najlepsze szanse edukacyjne
          i poczucie własnych kompetencji.

        </p>
        <p>
          Wspomagamy indywidualny rozwój dzieci
          uwzględniając potrzeby i możliwości każdego z nich.
        </p>
        <Offer />
      </article>

      <article className="article">
        <h3 className="article-title">Aktualności</h3>
        <HomeNews lastNews={lastNews} />
      </article>

      <article className="article">
        <h3 className="article-title">Zapisy</h3>
        <p>Zapisy 2023 / 2024 r.</p>
        <p>
          Zapraszamy dzieci w wieku od 2 i pół do 5 lat
          również o specjalnych potrzebach edukacyjnych.
        </p>
      </article>

      <article className="article">
        <h3 className="article-title">Cennik</h3>
        <Costs />
        <Link href="/dla-rodzica" className="home-page__section-news-more">Sprawdź szczegóły dla rodzica</Link>
      </article>

      <article className="article">
        <h3 className="article-title">Kadra pegadogiczna</h3>
        <p>
          Nasze prywatne cechuje kadra pedagogiczna, która stanowi
          sprawdzony zespół wykształconych, kreatywnych, pełnych
          pasji i ciepła nauczycieli i specjalistów, dbających
          o przyjazną atmosferę. W każdej grupie pracuje dwóch nauczycieli, którzy:
        </p>
        <p>
          posiadają bardzo dobry kontakt z dziećmi dostrzegają
          i rozumieją ich potrzeby w swojej pracy, wykorzystują najnowsze
          koncepcje i metody, które gwarantują opiekę, edukację
          i wychowanie dzieci na najwyższym poziomie
        </p>
      </article>

      <article className="article">
        <h3 className="article-title">Ważne komunikaty</h3>
        <article className="home-page__dynamic-content" dangerouslySetInnerHTML={{ __html: homepage.content }} />
      </article>

    </section>
  );
}

export async function getStaticProps() {
  const GET_HOMEPAGE = gql`
    query GetHomepage {
      page(idType: URI, id: "home-page") {
        content
      }
    }   
  `;
  const response = await client.query({
    query: GET_HOMEPAGE,
  });

  const { postListRefactored } = await fetchPostsPerPage(1, 3);

  return {
    props: {
      homepage: response?.data?.page,
      lastNews: postListRefactored,
    },
  };
}
