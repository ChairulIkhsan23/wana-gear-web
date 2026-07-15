/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Product } from "@/dummy/types"
import { popularProducts } from "@/dummy/popular-products"

export const productService = {
  getProducts: async (params?: Record<string, any>): Promise<{ data: Product[]; meta?: any }> => {
    await new Promise((r) => setTimeout(r, 300))
    const page = Number(params?.page) || 1
    const perPage = Number(params?.per_page) || 12
    const all = popularProducts as Product[]
    // duplicate popularProducts to simulate a large catalog for pagination
    const allProducts = [...all, ...all, ...all, ...all].map((p, i) => ({ ...p, id: p.id * 1000 + i }))
    const total = allProducts.length
    const lastPage = Math.ceil(total / perPage)
    const data = allProducts.slice((page - 1) * perPage, page * perPage)
    
    return { data, meta: { pagination: { current_page: page, per_page: perPage, total, last_page: lastPage } } }
  },

  getProduct: async (slug: string): Promise<{ data: Product | null }> => {
    await new Promise((r) => setTimeout(r, 200))
    const product = (popularProducts as Product[]).find((p) => p.slug === slug || String(p.id) === slug)
    return { data: product || null }
  },
}

