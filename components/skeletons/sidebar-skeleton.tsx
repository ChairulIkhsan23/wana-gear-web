import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface SidebarSkeletonProps {
  className?: string
  itemCount?: number
}

function SidebarSkeleton({ className, itemCount = 6 }: SidebarSkeletonProps) {
  return (
    <aside
      className={cn(
        "flex w-64 flex-col gap-2 border-r border-border p-4",
        className
      )}
    >
      <Skeleton className="mb-4 h-10 w-full rounded-lg" />
      <Skeleton className="h-4 w-24" />
      {Array.from({ length: itemCount }).map((_, i) => (
        <Skeleton key={i} className="h-9 w-full rounded-lg" />
      ))}
    </aside>
  )
}
SidebarSkeleton.displayName = "SidebarSkeleton"

export { SidebarSkeleton, type SidebarSkeletonProps }
