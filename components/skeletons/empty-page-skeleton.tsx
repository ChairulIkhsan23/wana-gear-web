import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface EmptyPageSkeletonProps {
  className?: string
  title?: boolean
  description?: boolean
  action?: boolean
}

function EmptyPageSkeleton({
  className,
  title = true,
  description = true,
  action = true,
}: EmptyPageSkeletonProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-24 text-center",
        className
      )}
    >
      <Skeleton className="h-16 w-16 rounded-full" />
      {title && <Skeleton className="h-6 w-48" />}
      {description && <Skeleton className="h-4 w-72" />}
      {action && <Skeleton className="mt-2 h-10 w-36 rounded-lg" />}
    </div>
  )
}
EmptyPageSkeleton.displayName = "EmptyPageSkeleton"

export { EmptyPageSkeleton, type EmptyPageSkeletonProps }
