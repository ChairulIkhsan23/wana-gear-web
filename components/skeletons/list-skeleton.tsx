import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface ListSkeletonProps {
  className?: string
  items?: number
  hasAvatar?: boolean
  hasAction?: boolean
}

function ListSkeleton({
  className,
  items = 5,
  hasAvatar = true,
  hasAction = false,
}: ListSkeletonProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border p-3"
        >
          {hasAvatar && <Skeleton className="h-10 w-10 shrink-0 rounded-full" />}
          <div className="flex-1 space-y-1.5">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-2/5" />
          </div>
          {hasAction && <Skeleton className="h-8 w-20 rounded-md" />}
        </div>
      ))}
    </div>
  )
}
ListSkeleton.displayName = "ListSkeleton"

export { ListSkeleton, type ListSkeletonProps }
