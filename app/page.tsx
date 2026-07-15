import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { PromoStrip } from "@/components/landing/PromoStrip"
import { Hero } from "@/components/landing/Hero"
import { RentalSearch } from "@/components/landing/RentalSearch"
import { BrandSection } from "@/components/landing/BrandSection"
import { LatestCatalog } from "@/components/landing/LatestCatalog"
import { CampaignBanner } from "@/components/landing/CampaignBanner"
import { PricingPackages } from "@/components/landing/PricingPackages"
import { CategoryLoop } from "@/components/landing/CategoryLoop"
import { CTASection } from "@/components/landing/CTASection"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <PromoStrip />
      <main>
        <Hero />
        <RentalSearch />
        <BrandSection />
        <LatestCatalog />
        <CampaignBanner />
        <PricingPackages />
        <CategoryLoop />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
