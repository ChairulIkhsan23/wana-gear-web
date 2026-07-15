export interface CheckoutPayload {
  items: { product_id: number; quantity: number; rental_start_date: string; rental_end_date: string }[]
  address_id: number
  note?: string
}

export interface PackageCheckoutPayload {
  package_id: number
  quantity: number
  rental_start_date: string
  rental_end_date: string
  address_id: number
}

export interface RentalOrder {
  id: number
  invoice: string
  status: string
  total: number
  created_at: string
}
