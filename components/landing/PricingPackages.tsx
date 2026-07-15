"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { ContainerContent } from "./Container"
import { rentalPackages } from "@/dummy/packages"
import { cn } from "@/lib/utils"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

export function PricingPackages() {
  return (
    <section className="py-16 lg:py-20 bg-muted">
      <ContainerContent>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-10">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              Paket Pendakian Favorit
            </h2>
            <p className="text-sm text-foreground-secondary mt-2 max-w-md leading-relaxed">
              Bundle hemat dengan perlengkapan lengkap untuk pendakianmu. Pilih paket sesuai kebutuhan.
            </p>
          </div>
          <Link
            href="/paket"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors shrink-0"
          >
            Lihat Semua Paket
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rentalPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative flex flex-col rounded-lg overflow-hidden transition-all duration-500",
                pkg.isPopular
                  ? "bg-white shadow-md shadow-foreground/5 ring-2 ring-foreground"
                  : "bg-white hover:shadow-lg hover:shadow-foreground/5"
              )}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-0 right-0 z-10">
                  <div className="bg-foreground text-white text-[11px] font-semibold uppercase tracking-widest text-center py-1.5">
                    Paling Populer
                  </div>
                </div>
              )}

              <div className={cn("relative aspect-[16/9] overflow-hidden bg-muted", pkg.isPopular && "rounded-t-none")}>
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col p-6 gap-5">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground tracking-tight">{pkg.name}</h3>
                    <span className="px-2 py-0.5 text-[11px] font-bold text-foreground bg-muted rounded shrink-0">
                      Hemat {pkg.discount}%
                    </span>
                  </div>
                  <p className="text-sm text-foreground-secondary mt-1.5 leading-relaxed">{pkg.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground tracking-tight">{rupiah(pkg.price)}</span>
                  <span className="text-sm text-foreground-muted line-through">{rupiah(pkg.original_price)}</span>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-widest">
                    Termasuk {pkg.items.length} item:
                  </p>
                  <ul className="space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary">
                        <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted rounded-lg px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">
                    Hemat {rupiah(pkg.original_price - pkg.price)} dari sewa satuan
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Link
                    href="#"
                    className="w-full inline-flex items-center justify-center h-12 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    Sewa Paket Ini
                  </Link>
                  <Link
                    href="#"
                    className="w-full inline-flex items-center justify-center h-12 text-sm font-semibold text-foreground bg-muted hover:bg-border rounded-lg transition-colors duration-200"
                  >
                    Lihat Detail Paket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}
