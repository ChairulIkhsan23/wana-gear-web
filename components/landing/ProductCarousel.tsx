"use client"

import type { Product } from "@/dummy/types"
import { EmblaCarousel } from "./EmblaCarousel"
import { ProductCard, ProductCardSkeleton, ProductCardEmpty } from "./ProductCard"

interface ProductCarouselProps {
  products: Product[]
  isLoading?: boolean
  showNewBadge?: boolean
}

export function ProductCarousel({
  products,
  isLoading = false,
  showNewBadge = false,
}: ProductCarouselProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!products.length) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCardEmpty key={i} />
        ))}
      </div>
    )
  }

  return (
    <EmblaCarousel className="group">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showNewBadge={showNewBadge} />
      ))}
    </EmblaCarousel>
  )
}