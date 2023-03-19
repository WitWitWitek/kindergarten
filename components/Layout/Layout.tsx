import { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import HomeBanner from "../HomeBanner/HomeBanner"
import { useRouter } from "next/router"
import GoogleMap from "../GoogleMap/GoogleMap"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  
  return (
    <>
        <Navbar />
        {router.pathname === '/' && <HomeBanner />}
        <main className="main">
            {children}
        </main>
        {router.pathname === '/kontakt' && <GoogleMap />}
        <Footer />
    </>
  )
}
