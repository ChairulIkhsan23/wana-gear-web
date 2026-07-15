import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { PromoListing } from "@/components/landing/PromoListing"

export default function PromoPage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <PromoListing />
      </main>
      <Footer />
    </>
  )
}