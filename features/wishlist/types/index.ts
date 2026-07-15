export interface WishlistItem {
  id: number
  product_id: number
  product: Record<string, unknown>
  created_at: string
}

export interface AddWishlistPayload {
  product_id: number
}
