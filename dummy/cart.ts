export interface RecommendedProduct {
  id: number
  image: string
  name: string
  brand: string
  price: number
}

export const recommendedProducts: RecommendedProduct[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/rec1/400/400",
    name: "Trekking Pole",
    brand: "Consina",
    price: 15000,
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/rec2/400/400",
    name: "Dry Bag 10L",
    brand: "Eiger",
    price: 10000,
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/rec3/400/400",
    name: "Power Bank 20000mAh",
    brand: "Arei",
    price: 25000,
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/rec4/400/400",
    name: "Water Bottle 1L",
    brand: "Nalgene",
    price: 12000,
  },
]