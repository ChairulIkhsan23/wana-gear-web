"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyCart() {
  return (
    <div className="text-center py-16 lg:py-20">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
        <ShoppingBag className="w-7 h-7 text-foreground-muted" />
      </div>
      <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Keranjang Anda Kosong</h2>
      <p className="text-sm lg:text-base text-foreground-secondary mb-6 max-w-sm mx-auto">
        Tambahkan perlengkapan terlebih dahulu sebelum melakukan checkout.
      </p>
      <Link href="/">
        <Button size="default" className="w-full sm:w-auto">
          Jelajahi Peralatan
        </Button>
      </Link>
    </div>
  )
}