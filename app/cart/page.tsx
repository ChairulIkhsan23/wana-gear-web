"use client"

import { useState, useEffect } from "react"
import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ContainerContent } from "@/components/landing/Container"
import { CartItem } from "@/features/cart/components/CartItem"
import { CartSummary } from "@/features/cart/components/CartSummary"
import { CartSkeleton } from "@/features/cart/components/CartSkeleton"
import { EmptyCart } from "@/features/cart/components/EmptyCart"
import { mockProducts, getProductsByIds, calculateOrderSummary, formatRupiah } from "@/constants/mock-products"
import type { CartItemData } from "@/features/cart/types"

export default function CartPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState<CartItemData[]>([
    { id: 1, productId: 1, quantity: 1, product: getProductsByIds([1])[0] },
    { id: 2, productId: 4, quantity: 2, product: getProductsByIds([4])[0] },
    { id: 3, productId: 6, quantity: 1, product: getProductsByIds([6])[0] },
  ])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleCheckout = () => {
    console.log("Checkout")
  }

  const handleContinueShopping = () => {
    window.location.href = "/"
  }

  const { itemCount, subtotal, serviceFee, total } = calculateOrderSummary(
    cartItems.map((item) => ({ product: item.product, quantity: item.quantity }))
  )

  return (
    <>
      <TopHeader />
      <Navbar />
      <main className="min-h-screen bg-surface">

        {/* Page Header */}
        <section className="py-8 lg:py-10">
          <ContainerContent>
            <div className="max-w-3xl">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-2">
                Keranjang
              </h1>
              <p className="text-sm lg:text-base text-foreground-secondary">
                Periksa kembali perlengkapan yang akan Anda sewa sebelum melanjutkan.
              </p>
            </div>
          </ContainerContent>
        </section>

        {/* Content */}
        <section className="pb-8 lg:pb-12">
          <ContainerContent>
            {isLoading ? (
              <CartSkeleton />
            ) : cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Cart Items - 8 columns */}
                <div className="lg:col-span-8">
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                      />
                    ))}

                    {/* Recommended Products - optional */}
                    <div className="mt-8 pt-8 border-t border-border/50">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Rekomendasi untuk Anda</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {mockProducts.slice(0, 4).map((product) => (
                          <div key={product.id} className="group bg-surface rounded-xl border border-border/50 overflow-hidden hover:border-border transition-colors p-3">
                            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative mb-3">
                              <img
                                src={product.featured_image?.url || "/images/placeholder.jpg"}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <span className="text-[10px] text-foreground-muted uppercase tracking-widest font-medium mb-1 block">
                              {typeof product.brand === "string" ? product.brand : product.brand?.name || "No Brand"}
                            </span>
                            <h4 className="text-sm font-semibold text-foreground line-clamp-1 mb-2">{product.name}</h4>
                            <div className="flex items-baseline gap-2 text-sm font-bold text-foreground">
                              {formatRupiah(product.price_per_day)}
                              <span className="text-[10px] font-medium text-foreground-muted">/hari</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary - 4 columns */}
                <div className="lg:col-span-4">
                  <CartSummary
                    items={cartItems}
                    onCheckout={handleCheckout}
                    onContinueShopping={handleContinueShopping}
                  />
                </div>
              </div>
            )}
          </ContainerContent>
        </section>
      </main>
      <Footer />
    </>
  )
}