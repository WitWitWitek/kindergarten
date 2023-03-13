import { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
        <Navbar />
        <main className="main">
            {children}
        </main>
        <Footer />
    </>
  )
}
