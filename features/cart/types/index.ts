import type { Product } from "@/dummy/types"

export interface CartItemData {
  id: number
  productId: number
  quantity: number
  product: Product
}

export interface OrderSummaryData {
  itemCount: number
  subtotal: number
  serviceFee: number
  total: number
}

// Legacy types for backward compatibility with existing components
export interface CartItem {
  id: number
  product_id: number
  quantity: number
  rental_start_date: string
  rental_end_date: string
  product: Product
}

export interface Cart {
  items: CartItem[]
  total: number
}

export interface AddCartItemPayload {
  product_id: number
  quantity: number
  rental_start_date: string
  rental_end_date: string
}

export interface UpdateCartItemPayload {
  quantity: number
  rental_start_date?: string
  rental_end_date?: string
}