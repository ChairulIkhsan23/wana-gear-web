"use client"

import Link from "next/link"
import { MapPin, Clock, Navigation, ExternalLink } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { stores } from "@/dummy/stores"
import { cn } from "@/lib/utils"

export function StoreLocation() {
  const store = stores[0]
  const isOpen = true

  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground">Lokasi Toko</h2>
              <p className="text-sm text-foreground-secondary mt-1">
                Kunjungi toko kami untuk konsultasi langsung.
              </p>
            </div>
            <Link
              href="/toko"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Lihat Semua Lokasi
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AnimatedSection as="div" delay={0.1}>
            <div className="p-6 lg:p-8 bg-muted rounded-2xl border border-border/50 h-full">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{store.name}</h3>
                  <span
                    className={cn(
                      "inline-block mt-1 px-2.5 py-0.5 text-[11px] font-semibold rounded-full",
                      isOpen ? "bg-success/10 text-success" : "bg-foreground-muted/10 text-foreground-muted"
                    )}
                  >
                    {isOpen ? "Buka Sekarang" : "Tutup"}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-foreground-secondary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-foreground-muted shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-foreground-muted shrink-0 mt-0.5" />
                  <div>
                    {store.hours.map((h) => (
                      <p key={h.day}>
                        {h.day}: {h.open} - {h.close}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/toko"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-md transition-all duration-200 active:scale-[0.97]"
                >
                  <MapPin className="w-4 h-4" />
                  Lihat Lokasi
                </Link>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-foreground-secondary ring-1 ring-border/50 hover:text-foreground hover:ring-border rounded-md transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Mulai Navigasi
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection as="div" delay={0.15}>
            <div className="h-full min-h-[300px] rounded-2xl overflow-hidden border border-border/50 bg-muted">
              <div className="relative w-full h-full min-h-[300px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${store.lng}!3d${store.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Toko"
                  className="w-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="sm:hidden mt-4">
          <Link
            href="/toko"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Lihat Semua Lokasi
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </ContainerContent>
    </section>
  )
}
