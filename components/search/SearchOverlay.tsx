import { motion } from "framer-motion"
import { PopularSearches } from "./PopularSearches"
import { PopularProducts } from "./PopularProducts"
import { SearchProductCard } from "./SearchProductCard"
import { SearchEmpty } from "./SearchEmpty"
import { SearchSkeleton } from "./SearchSkeleton"
import { useProducts } from "@/features/product/hooks/useProduct"

const POPULAR_SEARCHES_COUNT = 8
const CATEGORIES_COUNT = 7

interface SearchOverlayProps {
  query: string
  selectedIndex: number
  isLoading: boolean
  onSelect: (query: string) => void
  isMobile?: boolean
  overlayTop?: number
}

// removed local search function

export function SearchOverlay({
  query,
  selectedIndex,
  isLoading,
  onSelect,
  isMobile,
  overlayTop,
}: SearchOverlayProps) {
  const { data: searchData } = useProducts(query ? { search: query, per_page: 10 } : undefined)
  const results: { id: number; name: string; slug: string; price_per_day: number; featured_image?: { url: string }; images?: { url: string }[]; brand?: string | { name: string }; category?: { name: string } }[] = searchData?.data || []
  const showDefault = !query
  const showResults = !!query
  const isEmpty = showResults && results.length === 0
  const isComponentLoading = isLoading

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={!isMobile && overlayTop ? { top: overlayTop } : undefined}
      className={
        isMobile
          ? "flex flex-col flex-1 overflow-hidden"
          : "fixed inset-x-0 bg-surface rounded-2xl border border-border/50 shadow-lg shadow-black/5 z-[60] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-4rem)] mx-auto max-h-[70vh] overflow-y-auto"
      }
    >
      {isComponentLoading ? (
        <SearchSkeleton />
      ) : showDefault ? (
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-border/50">
            <PopularSearches
              onSelect={onSelect}
              selectedIndex={selectedIndex}
              startIndex={0}
            />
          </div>
          <div className="lg:flex-1">
            <PopularProducts
              selectedIndex={selectedIndex}
              startIndex={POPULAR_SEARCHES_COUNT + CATEGORIES_COUNT}
            />
          </div>
        </div>
      ) : isEmpty ? (
        <SearchEmpty />
      ) : (
        <div className="p-5 lg:p-6">
          <p className="text-xs text-foreground-muted mb-4">
            {results!.length} hasil untuk &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {results.map((product, i) => (
              <SearchProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.name,
                  brand: typeof product.brand === "string" ? product.brand : (product.brand?.name || ""),
                  price: product.price_per_day,
                  originalPrice: 0,
                  image: product.featured_image?.url || product.images?.[0]?.url || "/images/placeholder.jpg",
                  rating: 5,
                  reviewCount: 0,
                  badge: undefined,
                  category: product.category?.name || "",
                }}
                isSelected={selectedIndex === i}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
