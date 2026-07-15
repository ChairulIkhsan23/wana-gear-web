export interface ApiResponse<T> {
  status: "success" | "error"
  message: string
  data: T
}

export interface PaginatedResponse<T> {
  status: "success" | "error"
  message: string
  data: T[]
  meta: {
    pagination: {
      current_page: number
      per_page: number
      total: number
      last_page: number
    }
  }
}

export interface Address {
  id: number
  user_id: number
  label: string
  recipient_name: string
  phone: string
  address: string
  city: string
  province: string
  postal_code?: string
  latitude?: number
  longitude?: number
  is_default: boolean
}

export interface ApiErrorResponse {
  message: string
  errors?: Record<string, string[]>
}
