import Link from "next/link"
import Image from "next/image"

export default function Custom404() {
  return (
    <div className="not-found">
        <div className="not-found__svg">
            <Image src='/404.svg' alt="page not found image" fill />
        </div>
        <h2>Wygląda na to, że strona nie istnieje.</h2>
        <p>Sprawdź wpisany adres strony</p>
        <Link href='/' className="not-found__button">Wróć do strony głównej</Link>
    </div>
  )
}
