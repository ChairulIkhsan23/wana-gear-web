"use client"

import { ProductCard, ProductCardSkeleton } from "@/components/landing/ProductCard"
import { ContainerContent } from "@/components/landing/Container"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Plus, Trash2 } from "lucide-react"
import type { Product } from "@/dummy/types"

interface WishlistGridProps {
  products: Product[]
  onRemove: (productId: number) => void
  onAddToCart: (productId: number) => void
}

export function WishlistGrid({ products, onRemove, onAddToCart }: WishlistGridProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <div className="text-sm text-foreground-secondary">
          <span className="font-semibold text-foreground">{products.length}</span> barang di wishlist
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 hidden sm:flex">
          <Heart className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Semua</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col h-full">
            <ProductCard product={product} />
            <div className="mt-3 flex gap-2 border-t border-border/50 pt-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 gap-1.5 text-foreground-secondary hover:text-danger hover:border-danger"
                onClick={() => onRemove(product.id)}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Hapus</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="flex-1 gap-1.5"
                onClick={() => onAddToCart(product.id)}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Keranjang</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function WishlistSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="group flex flex-col h-full">
          <ProductCardSkeleton />
          <div className="mt-3 flex gap-2 border-t border-border/50 pt-3 animate-pulse">
            <div className="flex-1 h-9 bg-muted rounded-lg" />
            <div className="flex-1 h-9 bg-muted rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  )
}