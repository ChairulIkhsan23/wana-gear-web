"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { OrderSummaryData } from "../types"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

interface OrderSummaryProps {
  summary: OrderSummaryData
  onCheckout: () => void
}

export function OrderSummary({ summary, onCheckout }: OrderSummaryProps) {
  return (
    <div className="bg-surface rounded-xl border border-border/50 p-5 lg:p-6">
      <h3 className="text-base font-semibold text-foreground mb-5">Ringkasan Pesanan</h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-secondary">Jumlah Item</span>
          <span className="font-medium text-foreground">{summary.itemCount} barang</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-secondary">Estimasi Subtotal / Hari</span>
          <span className="font-medium text-foreground">{rupiah(summary.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-secondary">Biaya Layanan</span>
          <span className="font-medium text-foreground">{rupiah(summary.serviceFee)}</span>
        </div>

        <div className="h-px bg-border my-2" />

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Estimasi Total</span>
          <span className="text-lg font-bold text-primary">{rupiah(summary.total)}</span>
        </div>
      </div>

      <p className="text-xs text-foreground-muted mt-4">
        Total akhir akan dihitung berdasarkan durasi penyewaan saat Checkout.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <Button onClick={onCheckout} className="w-full">
          Lanjut ke Checkout
        </Button>
        <Link href="/" className="w-full">
          <Button variant="outline" className="w-full">
            Lanjut Belanja
          </Button>
        </Link>
      </div>
    </div>
  )
}

export function OrderSummarySkeleton() {
  return (
    <div className="bg-surface rounded-xl border border-border/50 p-5 lg:p-6 animate-pulse">
      <div className="h-5 w-32 bg-muted rounded mb-5" />
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="h-4 w-20 bg-muted rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
        <div className="h-px bg-border my-2" />
        <div className="flex items-center justify-between">
          <div className="h-5 w-28 bg-muted rounded" />
          <div className="h-6 w-28 bg-muted rounded" />
        </div>
      </div>
      <div className="h-3 w-full bg-muted rounded mt-4" />
      <div className="mt-6 flex flex-col gap-3">
        <div className="h-11 w-full bg-muted rounded-lg" />
        <div className="h-11 w-full bg-muted rounded-lg" />
      </div>
    </div>
  )
}