import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface PopularProduct {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: string
  category: string
}

const badgeStyles: Record<string, string> = {
  Terbaru: "bg-primary/10 text-primary",
  Promo: "bg-destructive/10 text-destructive",
  "Best Seller": "bg-warning/10 text-warning",
}

export function SearchProductCard({
  product,
  isSelected,
}: {
  product: PopularProduct
  isSelected?: boolean
}) {
  return (
    <Link
      href={`/produk/${product.id}`}
      className={cn(
        "group flex gap-3 p-2.5 rounded-xl transition-all duration-200",
        isSelected ? "bg-foreground/5" : "hover:bg-foreground/5"
      )}
    >
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-muted">
        {product.badge && (
          <span
            className={cn(
              "absolute top-1 left-1 z-10 px-1.5 py-0.5 text-[9px] font-bold rounded leading-none",
              badgeStyles[product.badge]
            )}
          >
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="80px"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <span className="text-[13px] font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {product.name}
        </span>
        <span className="text-xs text-foreground-muted mt-0.5">{product.brand}</span>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="text-sm font-bold text-primary">
            Rp{product.price.toLocaleString("id")}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-foreground-muted line-through">
              Rp{product.originalPrice.toLocaleString("id")}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span className="text-[11px] text-foreground-secondary">{product.rating}</span>
        </div>
      </div>
    </Link>
  )
}
