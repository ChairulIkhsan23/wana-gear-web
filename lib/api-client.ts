/* eslint-disable @typescript-eslint/no-explicit-any */
export const apiClient = {
  get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
    const queryString = params ? "?" + new URLSearchParams(Object.entries(params).reduce((acc, [k, v]) => { if (v !== undefined && v !== null) acc[k] = String(v); return acc }, {} as Record<string, string>)).toString() : ""
    const res = await fetch(`http://localhost:8000/api/v1${url}${queryString}`)
    return res.json()
  },
  post: async <T>(url: string, body?: any): Promise<T> => {
    const res = await fetch(`http://localhost:8000/api/v1${url}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined })
    return res.json()
  },
  put: async <T>(url: string, body?: any): Promise<T> => {
    const res = await fetch(`http://localhost:8000/api/v1${url}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined })
    return res.json()
  },
  patch: async <T>(url: string, body?: any): Promise<T> => {
    const res = await fetch(`http://localhost:8000/api/v1${url}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined })
    return res.json()
  },
  delete: async <T>(url: string): Promise<T> => {
    const res = await fetch(`http://localhost:8000/api/v1${url}`, { method: "DELETE" })
    return res.json()
  },
}
