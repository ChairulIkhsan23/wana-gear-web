/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/features/cart/hooks/useCart"
import { useAddresses } from "@/features/profile/hooks/useAddress"
import { useCheckoutRegular } from "@/features/checkout/hooks/useCheckout"

export function CheckoutForm() {
  const router = useRouter()
  const { data: cartData } = useCart()
  const { data: addressData } = useAddresses()
  const checkout = useCheckoutRegular()
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null)
  const [note, setNote] = useState("")

  const items = cartData?.data?.items || []
  const addresses = addressData?.data || []
  const total = items.reduce((sum: number, item: any) => sum + item.product.price_per_day * item.quantity, 0)

  const handleCheckout = () => {
    if (!selectedAddress) return alert("Pilih alamat pengiriman")
    checkout.mutate(
      {
        items: items.map((item: any) => ({
          product_id: item.product_id,
          quantity: item.quantity,
          rental_start_date: item.rental_start_date,
          rental_end_date: item.rental_end_date,
        })),
        address_id: selectedAddress,
        note,
      },
      {
        onSuccess: () => {
          alert("Pesanan berhasil dibuat!")
          router.push("/")
        },
      }
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Alamat Pengiriman</h2>
        {addresses.length === 0 ? (
          <p className="text-sm text-foreground-muted">Belum ada alamat. Tambahkan alamat di profil.</p>
        ) : (
          <div className="space-y-2">
            {addresses.map((addr: any) => (
              <label key={addr.id} className="flex items-start gap-3 p-3 border border-border rounded-xl cursor-pointer hover:bg-muted/50">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress === addr.id}
                  onChange={() => setSelectedAddress(addr.id)}
                  className="mt-1"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{addr.label}</p>
                  <p className="text-xs text-foreground-secondary">{addr.address}, {addr.city}</p>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Pesanan</h2>
        {items.map((item: any) => (
          <div key={item.id} className="flex items-center gap-3 py-2 border-b border-border/50">
            <div className="w-12 h-12 bg-muted rounded" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{item.product.name}</p>
              <p className="text-xs text-foreground-muted">{item.quantity} barang</p>
            </div>
            <p className="text-sm font-bold text-foreground">Rp{(item.product.price_per_day * item.quantity).toLocaleString("id")}</p>
          </div>
        ))}
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-1">Catatan (opsional)</label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} className="w-full h-20 px-4 py-3 text-sm bg-muted border border-border rounded-xl outline-none resize-none" placeholder="Catatan untuk penjual..." />
      </div>

      <div className="flex items-center justify-between py-3 border-t border-border">
        <span className="text-base font-bold text-foreground">Total</span>
        <span className="text-lg font-bold text-primary">Rp{total.toLocaleString("id")}</span>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={checkout.isPending || items.length === 0}
        className="w-full h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all disabled:opacity-50"
      >
        {checkout.isPending ? "Memproses..." : "Buat Pesanan"}
      </button>
    </div>
  )
}

