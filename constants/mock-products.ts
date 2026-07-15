import type { Product } from "@/dummy/types"

export const mockProducts: Product[] = [
  {
    id: 1,
    slug: "tenda-eiger-mountain-2p",
    name: "Tenda Eiger Mountain 2P",
    description: "Tenda dome 2 orang dari Eiger, cocok untuk pendakian gunung dan camping. Waterproof, windproof, dan mudah didirikan.",
    price_per_day: 50000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/tenda1/400/400" },
    images: [{ url: "https://picsum.photos/seed/tenda1/400/400" }, { url: "https://picsum.photos/seed/tenda2/400/400" }],
    brand: { id: 1, name: "Eiger", slug: "eiger" },
    category: { id: 1, slug: "tenda", name: "Tenda", description: "Tenda untuk camping dan pendakian" },
  },
  {
    id: 2,
    slug: "carrier-consina-60l",
    name: "Carrier Consina 60L",
    description: "Carrier 60 liter dari Consina dengan fitur torso adjustable, hip belt ergonomis, dan rain cover.",
    price_per_day: 35000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/carrier1/400/400" },
    images: [{ url: "https://picsum.photos/seed/carrier1/400/400" }, { url: "https://picsum.photos/seed/carrier2/400/400" }],
    brand: { id: 2, name: "Consina", slug: "consina" },
    category: { id: 2, slug: "carrier", name: "Carrier & Ransel", description: "Carrier dan ransel gunung" },
  },
  {
    id: 3,
    slug: "sleeping-bag-arei-polar",
    name: "Sleeping Bag Arei Polar",
    description: "Sleeping bag polar dari Arei, cocok untuk suhu 10-20°C. Ringan dan mudah dikemas.",
    price_per_day: 25000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/sleeping1/400/400" },
    images: [{ url: "https://picsum.photos/seed/sleeping1/400/400" }],
    brand: { id: 3, name: "Arei", slug: "arei" },
    category: { id: 3, slug: "sleeping-bag", name: "Sleeping Bag", description: "Sleeping bag dan matras" },
  },
  {
    id: 4,
    slug: "sepatu-gunung-eiger-hiker",
    name: "Sepatu Gunung Eiger Hiker",
    description: "Sepatu hiker Eiger dengan sol Vibram, waterproof, dan nyaman untuk trekking jarak jauh.",
    price_per_day: 45000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/sepatu1/400/400" },
    images: [{ url: "https://picsum.photos/seed/sepatu1/400/400" }],
    brand: { id: 1, name: "Eiger", slug: "eiger" },
    category: { id: 4, slug: "sepatu", name: "Sepatu & Sandal", description: "Sepatu gunung, hiker, dan sandal" },
  },
  {
    id: 5,
    slug: "kompor-portable-consina",
    name: "Kompor Portable Consina",
    description: "Kompor portable gas kecil, cocok untuk memasak di gunung. Praktis dan efisien.",
    price_per_day: 20000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/kompor1/400/400" },
    images: [{ url: "https://picsum.photos/seed/kompor1/400/400" }],
    brand: { id: 2, name: "Consina", slug: "consina" },
    category: { id: 5, slug: "peralatan-masak", name: "Peralatan Masak", description: "Kompor, nesting, dan alat masak" },
  },
  {
    id: 6,
    slug: "matras-arei-deluxe",
    name: "Matras Arei Deluxe",
    description: "Matras lipat Arei Deluxe dengan ketebalan 2.5cm, nyaman untuk tidur di alam terbuka.",
    price_per_day: 15000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/matras1/400/400" },
    images: [{ url: "https://picsum.photos/seed/matras1/400/400" }],
    brand: { id: 3, name: "Arei", slug: "arei" },
    category: { id: 3, slug: "sleeping-bag", name: "Sleeping Bag", description: "Sleeping bag dan matras" },
  },
  {
    id: 7,
    slug: "headlamp-eiger-led",
    name: "Headlamp Eiger LED 200 lumen",
    description: "Headlamp LED 200 lumen dari Eiger, tahan air, cocok untuk pendakian malam.",
    price_per_day: 10000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/headlamp1/400/400" },
    images: [{ url: "https://picsum.photos/seed/headlamp1/400/400" }],
    brand: { id: 1, name: "Eiger", slug: "eiger" },
    category: { id: 6, slug: "aksesoris", name: "Aksesoris", description: "Aksesoris perlengkapan outdoor" },
  },
  {
    id: 8,
    slug: "tenda-consina-dome-4p",
    name: "Tenda Consina Dome 4P",
    description: "Tenda dome 4 orang dari Consina, cocok untuk camping keluarga. Lapang dan nyaman.",
    price_per_day: 75000,
    is_active: true,
    featured_image: { url: "https://picsum.photos/seed/tenda3/400/400" },
    images: [{ url: "https://picsum.photos/seed/tenda3/400/400" }],
    brand: { id: 2, name: "Consina", slug: "consina" },
    category: { id: 1, slug: "tenda", name: "Tenda", description: "Tenda untuk camping dan pendakian" },
  },
]

export function getProductById(id: number): Product | undefined {
  return mockProducts.find((p) => p.id === id)
}

export function getProductsByIds(ids: number[]): Product[] {
  return mockProducts.filter((p) => ids.includes(p.id))
}

const rupiahFormatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })

export function formatRupiah(n: number): string {
  return rupiahFormatter.format(n)
}

export function calculateOrderSummary(cartItems: { product: { price_per_day: number }; quantity: number }[]): { itemCount: number; subtotal: number; serviceFee: number; total: number } {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price_per_day * item.quantity, 0)
  const serviceFee = Math.round(subtotal * 0.05)
  const total = subtotal + serviceFee
  return { itemCount, subtotal, serviceFee, total }
}