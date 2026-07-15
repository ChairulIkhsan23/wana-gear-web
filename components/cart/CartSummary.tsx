"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

interface CartSummaryProps {
  itemCount: number
  subtotal: number
  shippingCost: number
  discount: number
  total: number
}

export function CartSummary({
  itemCount,
  subtotal,
  shippingCost,
  discount,
  total,
}: CartSummaryProps) {
  const disabled = itemCount === 0

  return (
    <AnimatedSection as="div" delay={0.1}>
      <div className="bg-surface rounded-lg p-5 lg:p-6 lg:sticky lg:top-24">
        <h2 className="text-sm font-bold text-foreground mb-4">Ringkasan Rental</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-foreground-secondary">Jumlah Produk</span>
            <span className="font-semibold text-foreground">{itemCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground-secondary">Subtotal</span>
            <span className="font-semibold text-foreground">{rupiah(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground-secondary">Biaya Pengiriman</span>
            <span className="font-semibold text-foreground">
              {shippingCost === 0 ? (
                <span className="text-success">Gratis</span>
              ) : (
                rupiah(shippingCost)
              )}
            </span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between">
              <span className="text-foreground-secondary">Diskon / Voucher</span>
              <span className="font-semibold text-success">-{rupiah(discount)}</span>
            </div>
          )}
        </div>

        <div className="border-t border-border/50 mt-4 pt-4">
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold text-foreground">Total Pembayaran</span>
            <span className="text-lg font-bold text-foreground tracking-tight">{rupiah(total)}</span>
          </div>
        </div>

        <Link
          href={disabled ? "#" : "/checkout"}
          className={`w-full mt-5 h-12 inline-flex items-center justify-center text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-md transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 ${disabled ? "pointer-events-none opacity-40" : ""}`}
        >
          Lanjut ke Checkout
        </Link>

        {disabled && (
          <p className="text-xs text-foreground-muted text-center mt-2">
            Keranjang masih kosong
          </p>
        )}
      </div>
    </AnimatedSection>
  )
}
