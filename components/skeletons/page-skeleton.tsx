import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface PageSkeletonProps {
  className?: string
  withHeader?: boolean
  withSidebar?: boolean
}

function PageSkeleton({
  className,
  withHeader = true,
  withSidebar = false,
}: PageSkeletonProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      {withHeader && (
        <header className="flex h-16 items-center gap-4 border-b border-border px-4 md:px-8 lg:px-16">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="ml-auto h-9 w-64 max-md:hidden" />
          <div className="ml-auto flex items-center gap-3 md:ml-0">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-lg max-sm:hidden" />
          </div>
        </header>
      )}
      <div className="flex flex-1">
        {withSidebar && (
          <aside className="hidden w-64 border-r border-border p-4 lg:flex lg:flex-col lg:gap-2">
            <Skeleton className="mb-4 h-10 w-full rounded-lg" />
            <Skeleton className="h-4 w-24" />
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-full rounded-lg" />
            ))}
          </aside>
        )}
        <main className="flex-1 p-4 md:p-8 lg:p-12">
          <Skeleton className="mb-6 h-10 w-72" />
          <Skeleton className="mb-2 h-4 w-full max-w-2xl" />
          <Skeleton className="mb-8 h-4 w-3/4 max-w-xl" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-3 rounded-xl border border-border p-6">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
PageSkeleton.displayName = "PageSkeleton"

export { PageSkeleton, type PageSkeletonProps }
