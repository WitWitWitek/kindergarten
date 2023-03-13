import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import NavWave from "../Waves/NavWave"
import NavMenu from "./NavMenu/NavMenu"
import { Squeeze as Hamburger } from 'hamburger-react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar__wrapper">
                    <Link href="" className="navbar__logo-container">
                        <Image src='/logo.svg' alt="logotype" fill />
                    </Link>
                    <button onClick={() => setIsMenuOpen(prev => !prev)} className="navbar__menu-btn">
                        <Hamburger toggled={isMenuOpen} color="#FFF" />
                    </button>
                </div>
                <div className="navbar__svg-container">
                    <NavWave />
                </div>
            </nav>
            <NavMenu isMenuOpen={isMenuOpen} />
        </>
    )
}
