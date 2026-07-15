import type { WishlistItem, AddWishlistPayload } from "../types"

let wishlistItems: WishlistItem[] = []

export const wishlistService = {
  getWishlist: async (): Promise<{ data: WishlistItem[] }> => {
    await new Promise((r) => setTimeout(r, 200))
    return { data: wishlistItems }
  },

  addItem: async (payload: AddWishlistPayload): Promise<{ data: WishlistItem }> => {
    await new Promise((r) => setTimeout(r, 200))
    const item: WishlistItem = { id: Date.now(), product_id: payload.product_id, product: { id: payload.product_id, name: "Produk", price_per_day: 50000, images: [{ url: "https://placehold.co/100x100" }] }, created_at: new Date().toISOString() }
    wishlistItems.push(item)
    return { data: item }
  },

  removeItem: async (productId: number): Promise<void> => {
    await new Promise((r) => setTimeout(r, 200))
    wishlistItems = wishlistItems.filter((i) => i.product_id !== productId)
  },

  checkStatus: async (productId: number): Promise<{ data: { is_wishlisted: boolean } }> => {
    await new Promise((r) => setTimeout(r, 100))
    return { data: { is_wishlisted: wishlistItems.some((i) => i.product_id === productId) } }
  },
}
