import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface CardSkeletonProps {
  className?: string
  hasImage?: boolean
}

function CardSkeleton({ className, hasImage = true }: CardSkeletonProps) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-xl border border-border p-5",
        className
      )}
    >
      {hasImage && <Skeleton className="h-40 w-full rounded-lg" />}
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </div>
  )
}
CardSkeleton.displayName = "CardSkeleton"

export { CardSkeleton, type CardSkeletonProps }
