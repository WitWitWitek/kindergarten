import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavWave from '../../Waves/NavWave';

export default function NavLarge() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link href="/" className="navbar__logo-container">
          <Image src="/logo.svg" alt="logotype" fill />
        </Link>
        <div className="navbar__links">
          <Link href="/aktualnosci" className="navmenu__item">aktualnosci</Link>
          <Link href="/galeria" className="navmenu__item">galeria</Link>
          <Link href="/dla-rodzica" className="navmenu__item">dla rodzica</Link>
          <Link href="/kontakt" className="navmenu__item">kontakt</Link>
        </div>
      </div>
      <div className="navbar__svg-container">
        <NavWave />
      </div>
    </nav>
  );
}
