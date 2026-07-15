"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { differenceInDays, parseISO } from "date-fns"
import type { CartItem as CartItemType } from "@/features/cart/types"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

interface CartItemProps {
  item: CartItemType
  onQuantityChange: (id: number, qty: number) => void
  onRemove: (id: number) => void
}

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const stockLabel =
    item.product.is_active
      ? { text: "Ready", className: "bg-success/10 text-success" }
      : { text: "Tidak Tersedia", className: "bg-danger/10 text-danger" }

  const days = Math.max(1, differenceInDays(parseISO(item.rental_end_date), parseISO(item.rental_start_date)))
  const total = item.product.price_per_day * item.quantity * days
  const imageUrl = item.product.images?.[0]?.url || "https://placehold.co/100x100?text=No+Image"
  const maxQuantity = 10 // Assumption, you can adjust based on API if provided

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex gap-4 p-4 bg-surface rounded-lg"
      >
        <Link href={`/produk/${item.product.id}`} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden bg-muted shrink-0">
          <Image
            src={imageUrl}
            alt={item.product.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs text-foreground-muted uppercase tracking-widest font-medium">
                {typeof item.product.brand === "string" ? item.product.brand : (item.product.brand?.name || "Tidak ada merk")}
              </p>
              <Link href={`/produk/${item.product.id}`} className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors line-clamp-1">
                {item.product.name}
              </Link>
              <span className={cn("inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold rounded", stockLabel.className)}>
                {stockLabel.text}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="flex items-center justify-center w-7 h-7 rounded-md text-foreground-muted hover:text-danger hover:bg-danger/5 transition-all shrink-0"
              aria-label="Hapus item"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-end justify-between mt-3 gap-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                disabled={item.quantity <= 1}
                className="flex items-center justify-center w-7 h-7 rounded-md bg-muted text-foreground-secondary hover:bg-border disabled:opacity-40 transition-all"
                aria-label="Kurangi"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-8 text-center text-sm font-semibold text-foreground tabular-nums">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => onQuantityChange(item.id, Math.min(maxQuantity, item.quantity + 1))}
                disabled={item.quantity >= maxQuantity}
                className="flex items-center justify-center w-7 h-7 rounded-md bg-muted text-foreground-secondary hover:bg-border disabled:opacity-40 transition-all"
                aria-label="Tambah"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">{rupiah(total)}</p>
              <p className="text-[11px] text-foreground-muted">{rupiah(item.product.price_per_day)} x {days} hari</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

