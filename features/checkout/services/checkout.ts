/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CheckoutPayload, PackageCheckoutPayload, RentalOrder } from "../types"

export const checkoutService = {
  checkout: async (_payload: CheckoutPayload): Promise<{ data: RentalOrder }> => {
    await new Promise((r) => setTimeout(r, 1000))
    return { data: { id: Date.now(), invoice: "INV/" + Date.now(), status: "pending", total: 150000, created_at: new Date().toISOString() } }
  },

  checkoutPackage: async (_payload: PackageCheckoutPayload): Promise<{ data: RentalOrder }> => {
    await new Promise((r) => setTimeout(r, 1000))
    return { data: { id: Date.now(), invoice: "INV/" + Date.now(), status: "pending", total: 200000, created_at: new Date().toISOString() } }
  },
}

