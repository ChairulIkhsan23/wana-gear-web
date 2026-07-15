import { useQuery } from "@tanstack/react-query"
import { brandService } from "../services/brand"

export function useBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => brandService.getBrands(),
  })
}
