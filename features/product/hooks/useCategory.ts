import { useQuery } from "@tanstack/react-query"
import { categoryService } from "../services/category"

export function useNavigationCategories() {
  return useQuery({
    queryKey: ["navigation-categories"],
    queryFn: () => categoryService.getNavigationCategories(),
  })
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: () => categoryService.getCategory(slug),
  })
}
