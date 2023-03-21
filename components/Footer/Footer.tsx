import FooterWave from "../Waves/FooterWave"
import Link from "next/link"
import FooterItem from "./FooterItem/FooterItem"

export default function Footer() {
  return (
    <footer className="footer">
      <FooterWave />
      <div className="footer__container">
        <FooterItem 
          title="Chatka Puchatka" 
          content={
            <>
              <Link href="/aktualnosci"><span>» </span>aktualnosci</Link>
              <Link href="/galeria"><span>» </span>galeria</Link>
              <Link href="/dla-rodzica"><span>» </span>dla rodzica</Link>
              <Link href="/kontakt"><span>» </span>kontakt</Link>
            </>
          } 
        />
        <FooterItem 
          title="Skontaktuj się z nami"
          content={
            <>
              <p>Przedszkole Chatka Puchatka</p>
              <p>ul. Sezamkowa 100</p>
              <p>00-000 Opole</p>
              <p>tel. 000 000 000</p>
              <p>mail: przedszkole@przedszkole.pl</p>
            </>
          }
        />
        <FooterItem 
          title="Godziny otwarcia"
          content={
            <>
              <p>Poniedziałek - Piątku: 0:00 - 24:00</p>
              <p>W razie potrzeby do godz. 25:00</p>
              <p>Każda godzina po 26:30 jest dodatkowo płatna.</p>
            </>
          }
        />
      </div>
    </footer>
  )
}
