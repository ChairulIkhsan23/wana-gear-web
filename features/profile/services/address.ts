/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Address } from "@/lib/types"
import { popularProducts } from "@/dummy/popular-products"

let _addresses: any[] = []

export const addressService = {
  getAddresses: async (): Promise<{ data: any[] }> => {
    await new Promise((r) => setTimeout(r, 200))
    if (_addresses.length === 0) {
      _addresses = [
        { id: 1, user_id: 1, label: "Rumah", recipient_name: "Demo User", phone: "08123456789", address: "Jl. Merdeka No. 123", city: "Bandung", province: "Jawa Barat", postal_code: "40123", is_default: true, latitude: -6.9175, longitude: 107.6191 },
        { id: 2, user_id: 1, label: "Kantor", recipient_name: "Demo User", phone: "08123456789", address: "Jl. Sudirman No. 45", city: "Jakarta", province: "DKI Jakarta", postal_code: "10210", is_default: false, latitude: -6.2146, longitude: 106.8451 },
      ]
    }
    return { data: _addresses }
  },
}

