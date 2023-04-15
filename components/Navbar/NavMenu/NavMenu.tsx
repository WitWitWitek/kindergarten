import React from 'react';
import Link from 'next/link';

export default function NavMenu({ isMenuOpen, setIsMenuOpen }: NavmenuProps) {
  return (
    <ul className={`navmenu ${isMenuOpen ? 'navmenu__open' : ''}`}>
      <Link href="/aktualnosci" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>aktualnosci</Link>
      <Link href="/galeria" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>galeria</Link>
      <Link href="/dla-rodzica" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>dla rodzica</Link>
      <Link href="/kontakt" className="navmenu__item" onClick={() => setIsMenuOpen(false)}>kontakt</Link>
    </ul>
  );
}
