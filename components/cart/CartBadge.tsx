"use client"

import { useCart } from "@/features/cart/hooks/useCart"

export function CartBadge() {
  const { data } = useCart()
  const itemCount = data?.data?.items?.length || 0

  if (itemCount === 0) return null

  return (
    <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 text-[10px] font-bold text-white bg-primary rounded-full">
      {itemCount > 99 ? "99+" : itemCount}
    </span>
  )
}
