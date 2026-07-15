"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { rentalPackages } from "@/dummy/packages"
import { cn } from "@/lib/utils"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

export function PackageListing() {
  return (
    <section className="py-8 lg:py-10 bg-surface">
      <ContainerContent>
        <Breadcrumbs />
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight py-2">
            Semua Paket Pendakian
          </h1>
          <p className="text-sm text-foreground-secondary mt-2 max-w-xl leading-relaxed">
            Bundle hemat dengan perlengkapan lengkap untuk pendakianmu. Pilih paket sesuai kebutuhan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rentalPackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/paket/${pkg.id}`}
              className={cn(
                "group bg-white rounded-lg border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30",
                pkg.isPopular && "ring-2 ring-foreground"
              )}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-0 right-0 z-10">
                  <div className="bg-foreground text-white text-[11px] font-semibold uppercase tracking-widest text-center py-1.5">
                    Paling Populer
                  </div>
                </div>
              )}

              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-foreground tracking-tight line-clamp-1">{pkg.name}</h3>
                  <span className="px-2 py-0.5 text-[11px] font-bold text-foreground bg-muted rounded shrink-0">
                    Hemat {pkg.discount}%
                  </span>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed line-clamp-2">{pkg.description}</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground tracking-tight">{rupiah(pkg.price)}</span>
                  <span className="text-sm text-foreground-muted line-through">{rupiah(pkg.original_price)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-foreground-muted uppercase tracking-widest">
                      {pkg.items.length} item
                    </span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-foreground">
                    Hemat {rupiah(pkg.original_price - pkg.price)} dari sewa satuan
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                  <span className="w-full inline-flex items-center justify-center h-11 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-200 active:scale-[0.98]">
                    Sewa Paket Ini
                  </span>
                  <span className="w-full inline-flex items-center justify-center h-11 text-sm font-semibold text-foreground bg-muted hover:bg-border rounded-lg transition-colors duration-200">
                    Lihat Detail
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}