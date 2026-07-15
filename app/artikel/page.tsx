import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ArticleListing } from "@/components/landing/ArticleListing"

export default function ArtikelPage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <ArticleListing />
      </main>
      <Footer />
    </>
  )
}
