"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useHydration } from "@/hooks/useHydration"
import { useWishlistStatus, useAddWishlistItem, useRemoveWishlistItem } from "@/features/wishlist/hooks/useWishlist"
import type { Product } from "@/dummy/types"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

interface ProductCardProps {
  product: Product
  showNewBadge?: boolean
}

export function ProductCard({ product, showNewBadge = false }: ProductCardProps) {
  const discount = 0
  const hydrated = useHydration()
  const { data: wishlistStatus } = useWishlistStatus(product.id)
  const { mutate: addWishlist } = useAddWishlistItem()
  const { mutate: removeWishlist } = useRemoveWishlistItem()
  const isWishlisted = wishlistStatus?.data?.is_wishlisted || false
  const showWishlisted = hydrated && isWishlisted

  const imageUrl = product.featured_image?.url || product.featured_image_path || product.images?.[0]?.url || "/images/placeholder.jpg"
  const brandName = typeof product.brand === "string" ? product.brand : (product.brand?.name || "No Brand")

  return (
    <div className="group flex flex-col h-full bg-surface rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5">
      <Link href={"/produk/" + product.slug} className="relative aspect-[1/1] overflow-hidden bg-muted shrink-0">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {showNewBadge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest bg-primary text-white rounded-md">
            {"Baru"}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            if (isWishlisted) {
              removeWishlist(product.id)
            } else {
              addWishlist({ product_id: product.id })
            }
          }}
          className={cn(
            "absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300",
            showWishlisted
              ? "bg-danger/10 opacity-100"
              : "bg-white/0 group-hover:bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white"
          )}
          aria-label={showWishlisted ? "Hapus dari wishlist" : "Tambah ke wishlist"}
        >
          <Heart
            className={cn(
              "w-4 h-4",
              showWishlisted ? "text-danger fill-danger" : "text-foreground"
            )}
          />
        </button>
      </Link>
      <div className="flex flex-col flex-1 px-4 pt-4 pb-5">
        <span className="text-[11px] text-foreground-muted uppercase tracking-widest font-medium mb-1.5">{brandName}</span>
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">{product.name}</h3>
        
        <div className="mt-auto flex flex-col gap-1.5 pt-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-star text-star" />
            <span className="text-xs font-semibold text-foreground">4.5</span>
            <span className="text-xs text-foreground-muted">(0)</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-foreground">{rupiah(product.price_per_day)}<span className="text-[10px] font-medium text-foreground-muted">/hari</span></span>
            </div>
            {discount > 0 ? (
              <span className="text-[11px] font-semibold text-secondary">Hemat {discount}%</span>
            ) : (
              <span className="text-[11px] opacity-0 pointer-events-none">_</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col h-full bg-surface rounded-lg overflow-hidden", className)}>
      <div className="aspect-[1/1] bg-muted animate-pulse shrink-0" />
      <div className="flex flex-col flex-1 p-4 pb-5">
        <div className="h-3 w-16 bg-muted rounded animate-pulse mb-2" />
        <div className="h-4 w-full bg-muted rounded animate-pulse mb-1.5" />
        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
        
        <div className="mt-auto flex flex-col gap-2 pt-4">
          <div className="flex gap-1">
            <div className="h-3 w-12 bg-muted rounded animate-pulse" />
          </div>
          <div className="h-5 w-24 bg-muted rounded animate-pulse" />
          <div className="h-3 w-16 bg-muted rounded animate-pulse mt-0.5" />
        </div>
      </div>
    </div>
  )
}

export function ProductCardEmpty({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col h-full items-center justify-center aspect-[1/1] bg-muted/50 rounded-lg", className)}>
      <p className="text-sm text-foreground-muted">Tidak ada produk</p>
    </div>
  )
}
