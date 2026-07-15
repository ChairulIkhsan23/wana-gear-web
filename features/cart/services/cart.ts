/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Cart, AddCartItemPayload, CartItem } from "../types"

let cartItems: any[] = []

export const cartService = {
  getCart: async (): Promise<{ data: Cart }> => {
    await new Promise((r) => setTimeout(r, 200))
    return { data: { items: cartItems, total: cartItems.length } }
  },

  addItem: async (payload: AddCartItemPayload): Promise<{ data: CartItem }> => {
    await new Promise((r) => setTimeout(r, 300))
    const newItem = { id: Date.now(), product_id: payload.product_id, quantity: payload.quantity, rental_start_date: payload.rental_start_date, rental_end_date: payload.rental_end_date, product: { id: payload.product_id, name: "Produk", price_per_day: 50000, is_active: true, images: [{ url: "https://placehold.co/100x100" }] } }
    cartItems.push(newItem)
    return { data: newItem as any }
  },

  updateItem: async (id: number, payload: any): Promise<void> => {
    await new Promise((r) => setTimeout(r, 200))
    const idx = cartItems.findIndex((i) => i.id === id)
    if (idx >= 0) cartItems[idx] = { ...cartItems[idx], ...payload }
  },

  removeItem: async (id: number): Promise<void> => {
    await new Promise((r) => setTimeout(r, 200))
    cartItems = cartItems.filter((i) => i.id !== id)
  },
}
