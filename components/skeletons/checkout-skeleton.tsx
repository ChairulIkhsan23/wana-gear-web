import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface CheckoutSkeletonProps {
  className?: string
}

function CheckoutSkeleton({ className }: CheckoutSkeletonProps) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-3", className)}>
      <div className="space-y-6 lg:col-span-2">
        <div className="space-y-4 rounded-xl border border-border p-6">
          <Skeleton className="h-6 w-36" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
              <Skeleton className="h-20 w-20 shrink-0 rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/3" />
                <Skeleton className="h-3 w-1/4" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
          ))}
        </div>
        <div className="space-y-4 rounded-xl border border-border p-6">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-border p-6">
          <Skeleton className="h-6 w-28" />
          <div className="space-y-3">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-12" />
            </div>
            <div className="flex justify-between border-t border-border pt-3">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
CheckoutSkeleton.displayName = "CheckoutSkeleton"

export { CheckoutSkeleton, type CheckoutSkeletonProps }
