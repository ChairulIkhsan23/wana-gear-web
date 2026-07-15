import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductCardSkeletonProps {
  className?: string
  orientation?: "vertical" | "horizontal"
}

function ProductCardSkeleton({
  className,
  orientation = "vertical",
}: ProductCardSkeletonProps) {
  if (orientation === "horizontal") {
    return (
      <div
        className={cn(
          "flex gap-4 rounded-xl border border-border p-3",
          className
        )}
      >
        <Skeleton className="h-24 w-24 shrink-0 rounded-lg" />
        <div className="flex flex-1 flex-col justify-between py-1">
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "space-y-3 rounded-xl border border-border p-3",
        className
      )}
    >
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="space-y-2 px-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-9 w-full rounded-lg" />
      </div>
    </div>
  )
}
ProductCardSkeleton.displayName = "ProductCardSkeleton"

export { ProductCardSkeleton, type ProductCardSkeletonProps }
