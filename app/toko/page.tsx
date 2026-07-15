import type { Metadata } from "next"
import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { PromoStrip } from "@/components/landing/PromoStrip"
import { Footer } from "@/components/landing/Footer"
import { StoreHero } from "@/components/toko/StoreHero"
import { StoreLocator } from "@/components/toko/StoreLocator"
import { ServiceCards } from "@/components/toko/ServiceCards"
import { StoreInfo } from "@/components/toko/StoreInfo"


export const metadata: Metadata = {
  title: "Toko Kami - WanaGear",
  description:
    "Temukan toko WanaGear terdekat untuk konsultasi perlengkapan outdoor, pickup rental, dan berbagai layanan lainnya.",
}

export default function TokoPage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <PromoStrip />
      <main>
        <StoreHero />
        <StoreLocator />
        <ServiceCards />
        <StoreInfo />
      </main>
      <Footer />
    </>
  )
}
