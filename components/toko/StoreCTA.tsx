"use client"

import Link from "next/link"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

export function StoreCTA() {
  return (
    <section className="py-14 lg:py-18 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <div className="relative overflow-hidden rounded-lg bg-foreground">
            <div
              className="absolute inset-0 bg-[url('https://picsum.photos/seed/toko-cta/1920/800')] bg-cover bg-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/50" />
            <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
                Siap Memulai Petualanganmu?
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-lg mx-auto">
                Kunjungi toko WanaGear terdekat dan temukan perlengkapan terbaik untuk perjalanan berikutnya.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-foreground bg-white hover:bg-white/90 rounded-md transition-all duration-200 active:scale-[0.97]"
                >
                  Sewa Sekarang
                </Link>
                <Link
                  href="tel:+6281234567890"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:ring-white/60 rounded-md transition-all duration-200"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ContainerContent>
    </section>
  )
}
