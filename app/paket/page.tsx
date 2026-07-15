import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { PackageListing } from "@/components/landing/PackageListing"

export default function PaketPage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <PackageListing />
      </main>
      <Footer />
    </>
  )
}