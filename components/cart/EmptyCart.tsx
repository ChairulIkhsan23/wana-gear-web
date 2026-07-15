"use client"

import Link from "next/link"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

export function EmptyCart() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <div className="max-w-md mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-xl bg-muted">
              <svg className="w-10 h-10 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-3">
              Keranjangmu Masih Kosong
            </h2>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-8">
              Belum ada perlengkapan yang dipilih. Yuk mulai rencanakan petualanganmu dan temukan perlengkapan outdoor terbaik.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-md transition-all duration-200 active:scale-[0.97]"
              >
                Jelajahi Katalog
              </Link>
              <Link
                href="/#paket"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground-secondary ring-1 ring-border/50 hover:text-foreground hover:ring-border rounded-md transition-all duration-200"
              >
                Lihat Paket Pendakian
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="div" delay={0.15}>
          <div className="max-w-lg mx-auto mt-12 text-center">
            <h3 className="text-sm font-semibold text-foreground mb-4">Kategori Populer</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Hiking", "Camping", "Carrier", "Tenda", "Sleeping Bag", "Sepatu"].map((cat) => (
                <Link
                  key={cat}
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-foreground-secondary bg-muted rounded-md hover:bg-foreground hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </ContainerContent>
    </section>
  )
}
