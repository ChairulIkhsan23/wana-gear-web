"use client"

import Link from "next/link"
import { MapPin, Navigation } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

export function StoreHero() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div
        className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1669377593274-41985c518d03?q=80')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

      <ContainerContent className="relative z-10">
        <div className="flex items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          <AnimatedSection as="div" className="w-full">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
                Temukan Toko WanaGear Terdekat
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-md">
                Kunjungi toko kami untuk konsultasi perlengkapan outdoor, pickup rental, atau sekadar melihat koleksi terbaru.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Toko+Outdoor+WanaGear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-foreground hover:bg-white hover:text-foreground rounded-md transition-all duration-300 active:scale-[0.97]"
                >
                  <MapPin className="w-4 h-4" />
                  Lihat Lokasi
                </a>
                <Link
                  href="#map"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:ring-white/60 rounded-md transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  Mulai Navigasi
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContainerContent>
    </section>
  )
}
