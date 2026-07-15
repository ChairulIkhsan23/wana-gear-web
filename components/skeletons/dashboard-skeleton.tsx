import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { StatisticCardSkeleton } from "./statistic-card-skeleton"

interface DashboardSkeletonProps {
  className?: string
  statCount?: number
}

function DashboardSkeleton({ className, statCount = 4 }: DashboardSkeletonProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-10 w-36 rounded-lg" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: statCount }).map((_, i) => (
          <StatisticCardSkeleton key={i} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <Skeleton className="h-6 w-32" />
          <div className="rounded-xl border border-border p-6">
            <Skeleton className="mb-4 h-[200px] w-full rounded-lg" />
            <div className="flex gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-3 flex-1" />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-24" />
          <div className="space-y-3 rounded-xl border border-border p-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-1.5">
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-2.5 w-1/2" />
                </div>
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
DashboardSkeleton.displayName = "DashboardSkeleton"

export { DashboardSkeleton, type DashboardSkeletonProps }
