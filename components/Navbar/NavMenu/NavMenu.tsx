import Link from "next/link"

export default function NavMenu({ isMenuOpen, setIsMenuOpen }: NavmenuProps) {
  return (
    <ul className={`navmenu ${isMenuOpen ? 'navmenu__open' : ''}`}>
        <Link href="" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>aktualnosci</Link>
        <Link href="" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>galeria</Link>
        <Link href="" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>kontakt</Link>
    </ul>
  )
}
