import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface StatisticCardSkeletonProps {
  className?: string
}

function StatisticCardSkeleton({ className }: StatisticCardSkeletonProps) {
  return (
    <div
      className={cn(
        "space-y-3 rounded-xl border border-border p-5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-3 w-32" />
    </div>
  )
}
StatisticCardSkeleton.displayName = "StatisticCardSkeleton"

export { StatisticCardSkeleton, type StatisticCardSkeletonProps }
