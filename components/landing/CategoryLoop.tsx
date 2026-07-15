"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContainerContent } from "./Container"
import { ProductCarousel } from "./ProductCarousel"
import { cn } from "@/lib/utils"
import { useNavigationCategories } from "@/features/product/hooks/useCategory"
import { useProducts } from "@/features/product/hooks/useProduct"
import type { Category } from "@/dummy/types"

export function CategoryLoop() {
  const { data: catData, isLoading: catLoading } = useNavigationCategories()
  const categories: Category[] = catData?.data || []
  const isLoading = catLoading

  // Show all 4 categories to match navigation
  const sections = categories.slice(0, 4)

  if (isLoading) {
    return (
      <section className="py-14 lg:py-18 bg-surface">
        <ContainerContent>
          <div className="w-48 h-8 bg-muted animate-pulse mb-8 rounded-md" />
          <div className="flex gap-4 overflow-x-auto">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="min-w-[240px] h-[360px] bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </ContainerContent>
      </section>
    )
  }

  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="py-14 lg:py-18 bg-surface odd:bg-muted">
          <CategorySection category={section} />
        </section>
      ))}
    </>
  )
}

function CategorySection({ category }: { category: Category }) {
  const chips = category.children || []
  const [activeChip, setActiveChip] = useState("all")

  // Query products based on active chip or parent category
  const slug = activeChip === "all" ? category.slug : activeChip
  const { data: productData, isLoading } = useProducts({ category: slug, per_page: 8 })
  const products = productData?.data || []

  return (
    <ContainerContent>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight capitalize">
            {category.name}
          </h2>
          {category.description && (
            <p className="text-sm text-foreground-secondary mt-1.5 leading-relaxed">{category.description}</p>
          )}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setActiveChip("all")}
                className={cn(
                  "px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                  activeChip === "all"
                    ? "bg-foreground text-white"
                    : "text-foreground-secondary hover:text-foreground hover:bg-foreground/5"
                )}
              >
                Semua
              </button>
              {chips.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveChip(chip.slug)}
                  className={cn(
                    "px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                    activeChip === chip.slug
                      ? "bg-foreground text-white"
                      : "text-foreground-secondary hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {chip.name}
                </button>
              ))}
            </div>
          )}
          <Link
            href={`/category/${category.slug}`}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
          >
            Lihat Semua
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[240px] h-[360px] bg-muted animate-pulse rounded-lg shrink-0" />
          ))}
        </div>
      ) : (
        <ProductCarousel products={products} />
      )}
      
      <Link
        href={`/category/${category.slug}`}
        className="sm:hidden inline-flex items-center gap-1.5 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors mt-5"
      >
        Lihat Semua Katalog
        <ArrowRight className="w-4 h-4" />
      </Link>
    </ContainerContent>
  )
}