import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface TableSkeletonProps {
  className?: string
  rows?: number
  columns?: number
}

function TableSkeleton({
  className,
  rows = 8,
  columns = 4,
}: TableSkeletonProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-28 rounded-lg" />
          <Skeleton className="h-9 w-28 rounded-lg" />
        </div>
      </div>
      <div className="rounded-xl border border-border">
        <div className="flex gap-4 border-b border-border bg-muted/50 px-6 py-3">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton
              key={i}
              className={cn(
                "h-4",
                i === 0 ? "w-1/3" : i === columns - 1 ? "w-20 ml-auto" : "w-1/4"
              )}
            />
          ))}
        </div>
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex gap-4 border-b border-border px-6 py-4 last:border-0">
            {Array.from({ length: columns }).map((_, c) => (
              <Skeleton
                key={c}
                className={cn(
                  "h-4",
                  c === 0 ? "w-1/3" : c === columns - 1 ? "w-20 ml-auto" : "w-1/4"
                )}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  )
}
TableSkeleton.displayName = "TableSkeleton"

export { TableSkeleton, type TableSkeletonProps }
