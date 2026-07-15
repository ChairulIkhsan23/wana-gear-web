/* eslint-disable @typescript-eslint/no-explicit-any */
import { categories } from "@/dummy/articles"

export const categoryService = {
  getNavigationCategories: async (): Promise<{ data: any[] }> => {
    await new Promise((r) => setTimeout(r, 200))
    return { data: categories }
  },

  getCategory: async (slug: string): Promise<{ data: any }> => {
    await new Promise((r) => setTimeout(r, 200))
    const cat = categories.find((c: any) => c.slug === slug)
    return { data: cat || null }
  },
}

