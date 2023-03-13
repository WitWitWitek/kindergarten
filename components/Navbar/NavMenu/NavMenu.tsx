import Link from "next/link"

export default function NavMenu({ isMenuOpen }: NavmenuProps) {
  return (
    <ul className={`navmenu ${isMenuOpen ? 'navmenu__open' : ''}`}>
        <Link href="">aktualnosci</Link>
        <Link href="">galeria</Link>
        <Link href="">kontakt</Link>
    </ul>
  )
}
