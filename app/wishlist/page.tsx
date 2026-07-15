"use client"

import { useState, useEffect } from "react"
import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ContainerContent } from "@/components/landing/Container"
import { EmptyWishlist } from "@/features/wishlist/components/EmptyWishlist"
import { WishlistGrid } from "@/features/wishlist/components/WishlistGrid"
import { WishlistSkeleton } from "@/features/wishlist/components/WishlistSkeleton"
import { mockProducts, getProductsByIds, formatRupiah } from "@/constants/mock-products"
import type { Product } from "@/dummy/types"

export default function WishlistPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [wishlistProductIds, setWishlistProductIds] = useState<number[]>([1, 2, 3, 5, 7])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const wishlistProducts = getProductsByIds(wishlistProductIds)

  const handleRemove = (productId: number) => {
    setWishlistProductIds((prev) => prev.filter((id) => id !== productId))
  }

  const handleAddToCart = (productId: number) => {
    console.log("Add to cart:", productId)
  }

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
                Wishlist
              </h1>
              <p className="text-sm lg:text-base text-foreground-secondary">
                Simpan perlengkapan favorit Anda dan sewa kapan saja.
              </p>
            </div>
          </ContainerContent>
        </section>

        {/* Content */}
        <section className="pb-8 lg:pb-12">
          <ContainerContent>
            {isLoading ? (
              <WishlistSkeleton count={4} />
            ) : wishlistProducts.length === 0 ? (
              <EmptyWishlist />
            ) : (
              <WishlistGrid
                products={wishlistProducts}
                onRemove={handleRemove}
                onAddToCart={handleAddToCart}
              />
            )}
          </ContainerContent>
        </section>
      </main>
      <Footer />
    </>
  )
}