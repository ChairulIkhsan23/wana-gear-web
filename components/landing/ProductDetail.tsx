"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, ShoppingBag, Star, Truck, Shield, RotateCcw, UserCheck, ChevronRight } from "lucide-react"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { ProductCard } from "./ProductCard"
import { cn } from "@/lib/utils"
import { useAuthStore } from "@/features/auth/store"
import { useProduct, useProducts } from "@/features/product/hooks/useProduct"
import { useAddCartItem } from "@/features/cart/hooks/useCart"
import { useWishlistStatus, useAddWishlistItem, useRemoveWishlistItem } from "@/features/wishlist/hooks/useWishlist"
import { addDays, format } from "date-fns"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

const DURATIONS = [
  { label: "1 Hari", days: 1 },
  { label: "2 Hari", days: 2 },
  { label: "3 Hari", days: 3 },
  { label: "5 Hari", days: 5 },
  { label: "7 Hari", days: 7 },
]

interface ProductDetailProps {
  productId: string
}

function ProductDetail({ productId }: ProductDetailProps) {
  const { isAuthenticated } = useAuthStore()
  const { data: productRes, isLoading } = useProduct(productId)
  const product = productRes?.data

  const { data: wishlistData } = useWishlistStatus(product?.id || 0)
  const isWishlisted = wishlistData?.data?.is_wishlisted || false
  const { mutate: addWishlist } = useAddWishlistItem()
  const { mutate: removeWishlist } = useRemoveWishlistItem()
  const { mutate: addToCart } = useAddCartItem()

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedDuration, setSelectedDuration] = useState(3)

  const today = new Date()
  const rentalStart = format(today, "yyyy-MM-dd")
  const rentalEnd = format(addDays(today, selectedDuration), "yyyy-MM-dd")

  const images = useMemo(() => {
    if (!product?.images?.length) return []
    return product.images
  }, [product])

  const { data: relatedRes } = useProducts(
    product?.category
      ? { category: typeof product.category === "string" ? product.category : product.category.slug, per_page: 4 }
      : { per_page: 4 }
  )
  const relatedProducts = relatedRes?.data || []

  if (isLoading) {
    return (
      <section className="py-8 lg:py-12 bg-surface min-h-screen">
        <ContainerContent>
          <div className="w-48 h-4 bg-muted animate-pulse rounded mb-6" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="aspect-square bg-muted animate-pulse rounded-2xl" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-muted animate-pulse rounded" />
              <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
              <div className="h-6 w-1/3 bg-muted animate-pulse rounded" />
              <div className="h-24 bg-muted animate-pulse rounded" />
              <div className="h-12 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </ContainerContent>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="py-8 lg:py-12 bg-surface min-h-[60vh]">
        <ContainerContent>
          <Breadcrumbs />
          <div className="text-center py-20">
            <p className="text-foreground-secondary">Produk tidak ditemukan.</p>
            <Link href="/toko" className="mt-4 inline-flex text-primary hover:underline">Lihat produk lainnya</Link>
          </div>
        </ContainerContent>
      </section>
    )
  }

  const brandName = typeof product.brand === "string" ? product.brand : (product.brand?.name || "")

  return (
    <section className="py-8 lg:py-12 bg-surface min-h-screen">
      <ContainerContent>
        <Breadcrumbs />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src={images[selectedImage]?.url || product.featured_image?.url || product.featured_image_path || "/images/placeholder.jpg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  if (isWishlisted) {
                    removeWishlist(product.id)
                  } else {
                    addWishlist({ product_id: product.id })
                  }
                }}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                aria-label={isWishlisted ? "Hapus dari wishlist" : "Tambah ke wishlist"}
              >
                <Heart className={cn("w-5 h-5", isWishlisted ? "text-danger fill-danger" : "text-foreground")} />
              </button>
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all",
                      selectedImage === i ? "border-primary" : "border-transparent hover:border-border"
                    )}
                  >
                    <Image
                      src={img.url}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              {brandName && (
                <p className="text-xs text-foreground-muted uppercase tracking-widest font-medium mb-1">{brandName}</p>
              )}
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">{product.name}</h1>
              {product.category && (
                <Link
                  href={`/kategori/${typeof product.category === "string" ? product.category : product.category.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                >
                  {typeof product.category === "string" ? product.category : product.category.name}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-star text-star" />
              <span className="text-sm font-semibold text-foreground">4.5</span>
              <span className="text-sm text-foreground-muted">(0 ulasan)</span>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">{rupiah(product.price_per_day)}</span>
                <span className="text-sm text-foreground-muted">/hari</span>
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Deskripsi</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Duration Selector */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Durasi Sewa</h3>
              <div className="flex flex-wrap gap-2">
                {DURATIONS.map((dur) => (
                  <button
                    key={dur.days}
                    type="button"
                    onClick={() => setSelectedDuration(dur.days)}
                    className={cn(
                      "px-4 py-2.5 text-sm font-medium rounded-lg border transition-all",
                      selectedDuration === dur.days
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-foreground-secondary hover:border-foreground/20 hover:text-foreground"
                    )}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-foreground-muted mt-2">
                {format(addDays(today, 0), "dd MMM yyyy")} - {format(addDays(today, selectedDuration), "dd MMM yyyy")}
              </p>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Jumlah</h3>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-foreground-secondary hover:bg-border disabled:opacity-40 transition-all"
                  aria-label="Kurangi"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-lg font-semibold text-foreground tabular-nums">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  disabled={quantity >= 99}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-foreground-secondary hover:bg-border disabled:opacity-40 transition-all"
                  aria-label="Tambah"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="p-4 bg-muted rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground-secondary">Total</span>
                <span className="text-xl font-bold text-foreground">
                  {rupiah(product.price_per_day * quantity * selectedDuration)}
                </span>
              </div>
              <p className="text-xs text-foreground-muted mt-1">
                {rupiah(product.price_per_day)} x {quantity} item x {selectedDuration} hari
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={() =>
                    addToCart({
                      product_id: product.id,
                      quantity,
                      rental_start_date: rentalStart,
                      rental_end_date: rentalEnd,
                    })
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Sewa Sekarang
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all"
                >
                  <UserCheck className="w-5 h-5" />
                  Masuk untuk Sewa
                </Link>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Truck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Pengiriman</p>
                  <p className="text-[11px] text-foreground-muted">Jabodetabek & nasional</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Kondisi Terjamin</p>
                  <p className="text-[11px] text-foreground-muted">Quality check ketat</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <RotateCcw className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Pengembalian</p>
                  <p className="text-[11px] text-foreground-muted">Tepat waktu & mudah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-8">Produk Terkait</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </ContainerContent>
    </section>
  )
}

ProductDetail.displayName = "ProductDetail"

export { ProductDetail }
