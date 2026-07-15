import { popularProducts } from "@/dummy/popular-products"
import { SearchProductCard } from "./SearchProductCard"

interface PopularProductsProps {
  selectedIndex: number
  startIndex: number
}

export function PopularProducts({ selectedIndex, startIndex }: PopularProductsProps) {
  return (
    <div className="p-5 lg:p-6">
      <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">
        Produk Populer
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {popularProducts.map((product, i) => {
          const mapped = {
            id: product.id,
            name: product.name,
            brand: product.brand.name,
            price: product.price_per_day,
            image: product.featured_image.url,
            rating: 0,
            reviewCount: 0,
            category: product.category.name,
          }
          return (
            <SearchProductCard
              key={product.id}
              product={mapped}
              isSelected={selectedIndex === startIndex + i}
            />
          )
        })}
      </div>
    </div>
  )
}
