"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

export function CartHero() {
  return (
    <section className="py-10 lg:py-14 bg-muted">
      <ContainerContent>
        <AnimatedSection as="div">
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground-muted mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">Beranda</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Keranjang Rental</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-[1.1]">
            Keranjang Rental
          </h1>
          <p className="text-sm text-foreground-secondary mt-2 max-w-lg leading-relaxed">
            Periksa kembali perlengkapan yang akan Anda sewa sebelum melanjutkan ke checkout.
          </p>
        </AnimatedSection>
      </ContainerContent>
    </section>
  )
}
