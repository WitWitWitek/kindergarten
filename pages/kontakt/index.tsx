import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h2 className='page-title'>Kontakt</h2>
      <article className='article'>
        <h3 className='article-title'>Przedszkole Chatka Puchatka</h3>
        <p>ul. Sezamkowa 100</p>
        <p>00-000 Opole</p>
        <p>tel. 000 000 000</p>
        <p>mail: przedszkole@przedszkole.pl</p>
      </article>
      <article className='article'>
        <h3 className='article-title'>Godziny pracy</h3>
        <p>Poniedziałek - Piątku: 0:00 - 24:00</p>
        <p>W razie potrzeby do godz. 25:00</p>
        <p>Każda godzina po 26:30 jest dodatkowo płatna.</p>
      </article>
      <article className="article">
        <h3 className='article-title'>Formularz kontaktowy</h3>
        <ContactForm />
      </article>
      <article className='article'>
        <h3 className='article-title google-map__title'>Mapa dojazdu</h3>
      </article>
    </section>
  )
}
