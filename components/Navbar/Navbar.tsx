import Link from "next/link"
import { useState } from "react"
import NavMenu from "./NavMenu/NavMenu"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <nav className="navbar">
                <div className="navbar__wrapper">
                    <div className="navbar__logo-container">
                        <Link href="">
                            <img className='navbar__logo' src="/logo.svg" alt="logotype" />
                        </Link>
                    </div>
                    <div className="navbar__links-container">
                        <button onClick={() => setIsMenuOpen(prev => !prev)}>Menu</button>
                        {isMenuOpen && <NavMenu />}
                    </div>
                </div>
                <div className="navbar__svg-container">
                    <div className="custom-shape-divider-top-1678654858">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
        </nav>
    )
}
