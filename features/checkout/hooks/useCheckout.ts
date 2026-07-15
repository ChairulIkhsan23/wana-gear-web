import { useMutation } from "@tanstack/react-query"
import { checkoutService } from "../services/checkout"
import type { CheckoutPayload, PackageCheckoutPayload } from "../types"

export function useCheckoutRegular() {
  return useMutation({
    mutationFn: (payload: CheckoutPayload) => checkoutService.checkout(payload),
  })
}

export function useCheckoutPackage() {
  return useMutation({
    mutationFn: (payload: PackageCheckoutPayload) => checkoutService.checkoutPackage(payload),
  })
}
