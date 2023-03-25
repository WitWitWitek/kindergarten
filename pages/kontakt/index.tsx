import GoogleMap from "@/components/GoogleMap/GoogleMap";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h2 className='home-page__title'>Kontakt</h2>
      <article className='home-page__section'>
        <h3 className='home-page__section-title'>Przedszkole Chatka Puchatka</h3>
        <p>ul. Sezamkowa 100</p>
        <p>00-000 Opole</p>
        <p>tel. 000 000 000</p>
        <p>mail: przedszkole@przedszkole.pl</p>
      </article>
      <article className='home-page__section'>
        <h3 className='home-page__section-title'>Godziny pracy</h3>
        <p>Poniedziałek - Piątku: 0:00 - 24:00</p>
        <p>W razie potrzeby do godz. 25:00</p>
        <p>Każda godzina po 26:30 jest dodatkowo płatna.</p>
      </article>
      <article className='home-page__section'>
        <h3 className='home-page__section-title google-map__title'>Mapa dojazdu</h3>
      </article>
    </section>
  )
}
