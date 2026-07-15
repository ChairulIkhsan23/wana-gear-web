"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ArrowRight } from "lucide-react"
import type { OrderSummaryData } from "../types"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

interface CartSummaryProps {
  items: { product: { price_per_day: number }; quantity: number }[]
  onCheckout: () => void
  onContinueShopping: () => void
}

export function CartSummary({ items, onCheckout, onContinueShopping }: CartSummaryProps) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.product.price_per_day * item.quantity, 0)
  const serviceFee = Math.round(subtotal * 0.05)
  const total = subtotal + serviceFee

  return (
    <div className="bg-surface rounded-xl border border-border/50 p-5 lg:p-6 sticky top-24 lg:top-28">
      <h3 className="text-base font-semibold text-foreground mb-5">Ringkasan Pesanan</h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-secondary">Jumlah Item</span>
          <span className="font-medium text-foreground">{itemCount} barang</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-secondary">Estimasi Subtotal / Hari</span>
          <span className="font-medium text-foreground">{rupiah(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-secondary">Biaya Layanan</span>
          <span className="font-medium text-foreground">{rupiah(serviceFee)}</span>
        </div>

        <div className="h-px bg-border my-2" />

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Estimasi Total</span>
          <span className="text-lg font-bold text-primary">{rupiah(total)}</span>
        </div>
      </div>

      <p className="text-xs text-foreground-muted mt-4">
        Total akhir akan dihitung berdasarkan durasi penyewaan saat Checkout.
      </p>

      <div className="mt-5 space-y-3">
        <Button size="lg" className="w-full gap-2" onClick={onCheckout}>
          <ShoppingBag className="w-4 h-4" />
          Lanjut ke Checkout
        </Button>
        <Link href="/" onClick={onContinueShopping} className="w-full">
          <Button variant="outline" size="lg" className="w-full gap-2">
            <ArrowRight className="w-4 h-4" />
            Lanjut Belanja
          </Button>
        </Link>
      </div>
    </div>
  )
}

export function CartSummarySkeleton() {
  return (
    <div className="sticky top-20 lg:sticky lg:top-24 self-start space-y-6 animate-pulse">
      <div className="bg-surface rounded-xl border border-border/50 p-5 lg:p-6">
        <div className="h-5 w-40 bg-muted rounded mb-4" />
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="h-4 w-32 bg-muted rounded" />
            <div className="h-4 w-24 bg-muted rounded" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-40 bg-muted rounded" />
            <div className="h-4 w-28 bg-muted rounded" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-32 bg-muted rounded" />
            <div className="h-4 w-24 bg-muted rounded" />
          </div>
          <div className="border-t border-border/50 pt-3" />
          <div className="flex justify-between">
            <div className="h-5 w-24 bg-muted rounded" />
            <div className="h-5 w-28 bg-muted rounded" />
          </div>
        </div>
        <div className="h-3 w-full bg-muted rounded mt-4" />
        <div className="mt-5 space-y-3">
          <div className="h-12 w-full bg-muted rounded" />
          <div className="h-12 w-full bg-muted rounded" />
        </div>
      </div>
    </div>
  )
}