import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { cartService } from "../services/cart"
import type { AddCartItemPayload, UpdateCartItemPayload } from "../types"

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => cartService.getCart(),
  })
}

export function useAddCartItem() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (payload: AddCartItemPayload) => cartService.addItem(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  })
}

export function useUpdateCartItem() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, ...payload }: { id: number } & UpdateCartItemPayload) => cartService.updateItem(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  })
}

export function useRemoveCartItem() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => cartService.removeItem(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  })
}
