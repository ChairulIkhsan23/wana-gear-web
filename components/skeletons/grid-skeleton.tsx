import { cn } from "@/lib/utils"
import { ProductCardSkeleton } from "./product-card-skeleton"

interface GridSkeletonProps {
  className?: string
  items?: number
  cols?: 2 | 3 | 4
}

const colClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const

function GridSkeleton({
  className,
  items = 6,
  cols = 3,
}: GridSkeletonProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        colClasses[cols],
        className
      )}
    >
      {Array.from({ length: items }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}
GridSkeleton.displayName = "GridSkeleton"

export { GridSkeleton, type GridSkeletonProps }
