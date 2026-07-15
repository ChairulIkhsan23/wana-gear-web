"use client"

import Link from "next/link"
import { ContainerContent } from "./Container"

export function CTASection() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <div className="relative overflow-hidden rounded-3xl bg-foreground">
          <div
            className="absolute inset-0 bg-[url('https://picsum.photos/seed/cta-bg/1920/800')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/50" />
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Siap Memulai Petualanganmu?
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Jelajahi ribuan perlengkapan outdoor berkualitas. Sewa mudah, aman, dan terpercaya. Alam menunggumu!
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-colors duration-200"
                >
                  Sewa Sekarang
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-colors duration-200"
                >
                  Lihat Katalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </section>
  )
}
