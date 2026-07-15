import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { wishlistService } from "../services/wishlist"
import type { AddWishlistPayload } from "../types"

export function useWishlist() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () => wishlistService.getWishlist(),
  })
}

export function useAddWishlistItem() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (payload: AddWishlistPayload) => wishlistService.addItem(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  })
}

export function useRemoveWishlistItem() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (productId: number) => wishlistService.removeItem(productId),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  })
}

export function useWishlistStatus(productId: number) {
  return useQuery({
    queryKey: ["wishlist-status", productId],
    queryFn: () => wishlistService.checkStatus(productId),
  })
}
