"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContainerContent } from "./Container"
import { ProductCarousel } from "./ProductCarousel"
import { useProducts } from "@/features/product/hooks/useProduct"

export function LatestCatalog() {
  const { data, isLoading } = useProducts({ sort: "latest", per_page: 8 })
  const products = data?.data || []

  return (
    <section className="py-14 lg:py-20 bg-surface">
      <ContainerContent>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-9">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              Katalog Terbaru
            </h2>
            <p className="text-sm text-foreground-secondary mt-2 max-w-md leading-relaxed">
              Temukan perlengkapan terbaru untuk petualangan berikutnya.
            </p>
          </div>
          <Link
            href="/toko"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors shrink-0"
          >
            Lihat Semua Katalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {isLoading ? (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[240px] h-[360px] bg-muted animate-pulse rounded-lg shrink-0" />
            ))}
          </div>
        ) : (
          <ProductCarousel products={products} showNewBadge />
        )}
      </ContainerContent>
    </section>
  )
}