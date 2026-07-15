"use client"

import { useState } from "react"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { PromoCard } from "./PromoCard"
import { promos } from "@/dummy/promos"
import { cn } from "@/lib/utils"

const categories = ["Semua", ...new Set(promos.map((p) => p.category))]

export function PromoListing() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredPromos =
    activeCategory === "Semua"
      ? promos
      : promos.filter((p) => p.category === activeCategory)

  return (
    <section className="py-8 lg:py-10 bg-surface">
      <ContainerContent>
        <Breadcrumbs />
        <div className="mb-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight py-2">
            Promo & Voucher Aktif
          </h1>
          <p className="text-sm text-foreground-secondary mt-1 max-w-xl leading-relaxed">
            Dapatkan diskon eksklusif dan penawaran khusus untuk penyewaan perlengkapan outdoor.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-foreground-secondary border border-border/50 hover:border-primary/30 hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredPromos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}