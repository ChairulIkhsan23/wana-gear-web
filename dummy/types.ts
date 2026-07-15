export interface ProductImage {
  url: string
}

export interface ProductCategory {
  id: number
  slug: string
  name: string
  description?: string
  children?: ProductCategory[]
}

export interface ProductBrand {
  id: number
  name: string
  slug?: string
  logo?: { url: string }
}

export interface Product {
  id: number
  slug: string
  name: string
  description?: string
  price_per_day: number
  is_active: boolean
  featured_image?: { url: string }
  featured_image_path?: string
  images?: ProductImage[]
  brand?: string | ProductBrand
  category?: ProductCategory
}

export interface Promo {
  href: string
  isNew: boolean
  image: string
  title: string
  discount: string
  category: string
  validUntil: string
  description: string
  cta: string
}

export interface StoreHours {
  day: string
  open: string
  close: string
}

export interface Store {
  id: number
  name: string
  address: string
  lat: number
  lng: number
  hours: StoreHours[]
  phone?: string
  email?: string
  image?: string
}

export type Category = ProductCategory
