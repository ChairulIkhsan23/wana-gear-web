"use client"

import { Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { CartItemData } from "../types"

interface CartItemProps {
  item: CartItemData
  onQuantityChange: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const { product, quantity, id } = item
  const imageUrl = product.featured_image?.url || product.featured_image_path || product.images?.[0]?.url || "/images/placeholder.jpg"
  const brandName = typeof product.brand === "string" ? product.brand : product.brand?.name || "No Brand"

  return (
    <div className="flex gap-4 p-4 bg-surface rounded-xl border border-border/50 hover:border-border transition-colors">
      <div className="relative shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-foreground-muted uppercase tracking-widest font-medium">{brandName}</span>
          <h3 className="text-sm font-semibold text-foreground line-clamp-1">{product.name}</h3>
          <div className="flex items-baseline gap-2 text-sm font-bold text-foreground">
            {rupiah(product.price_per_day)}
            <span className="text-[10px] font-medium text-foreground-muted">/hari</span>
          </div>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            <span className="text-xs text-foreground-secondary">Jumlah</span>
            <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0 text-foreground-secondary hover:text-foreground hover:bg-muted"
                onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
                aria-label="Kurangi jumlah"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-10 text-center text-sm font-medium text-foreground">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0 text-foreground-secondary hover:text-foreground hover:bg-muted"
                onClick={() => onQuantityChange(id, quantity + 1)}
                aria-label="Tambah jumlah"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-foreground-secondary hover:text-danger hover:border-danger h-8 px-3"
              onClick={() => onRemove(id)}
              aria-label="Hapus dari keranjang"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs font-medium">Hapus</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CartItemSkeleton() {
  return (
    <div className="flex gap-4 p-4 bg-surface rounded-xl border border-border/50 animate-pulse">
      <div className="shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-lg bg-muted" />
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex flex-col gap-1">
          <div className="h-2 w-16 bg-muted rounded" />
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-5 w-24 bg-muted rounded" />
        </div>
        <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="h-3 w-12 bg-muted rounded" />
            <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
              <div className="h-8 w-8 bg-muted" />
              <div className="w-10 h-8 bg-muted" />
              <div className="h-8 w-8 bg-muted" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-20 bg-muted rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}