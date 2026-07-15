import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface NavbarSkeletonProps {
  className?: string
}

function NavbarSkeleton({ className }: NavbarSkeletonProps) {
  return (
    <header
      className={cn(
        "flex h-16 w-full items-center gap-4 border-b border-border px-4 md:px-8 lg:px-16",
        className
      )}
    >
      <Skeleton className="h-8 w-32" />
      <Skeleton className="ml-auto hidden h-9 w-64 md:block" />
      <div className="ml-auto flex items-center gap-3 md:ml-0">
        <Skeleton className="h-9 w-9 rounded-full" />
        <Skeleton className="h-9 w-9 rounded-full" />
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </header>
  )
}
NavbarSkeleton.displayName = "NavbarSkeleton"

export { NavbarSkeleton, type NavbarSkeletonProps }
