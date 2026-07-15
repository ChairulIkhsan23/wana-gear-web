import type { Metadata } from "next"
import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { PromoStrip } from "@/components/landing/PromoStrip"
import { Footer } from "@/components/landing/Footer"
import { HelpHero } from "@/components/bantuan/HelpHero"
import { QuickActions } from "@/components/bantuan/QuickActions"
import { RentalGuide } from "@/components/bantuan/RentalGuide"
import { FAQSection } from "@/components/bantuan/FAQSection"
import { ContactSection } from "@/components/bantuan/ContactSection"

import { PolicySection } from "@/components/bantuan/PolicySection"
import { TipsSection } from "@/components/bantuan/TipsSection"
import { HelpCTA } from "@/components/bantuan/HelpCTA"

export const metadata: Metadata = {
  title: "Pusat Bantuan - WanaGear",
  description:
    "Temukan jawaban seputar penyewaan, pembayaran, pengiriman, dan pengembalian perlengkapan outdoor WanaGear.",
}

export default function BantuanPage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <PromoStrip />
      <main>
        <HelpHero />
        <QuickActions />
        <RentalGuide />
        <FAQSection />
        <ContactSection />
        <PolicySection />
        <TipsSection />
        <HelpCTA />
      </main>
      <Footer />
    </>
  )
}
