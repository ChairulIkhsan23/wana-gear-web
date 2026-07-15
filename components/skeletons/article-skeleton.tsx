import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface ArticleSkeletonProps {
  className?: string
}

function ArticleSkeleton({ className }: ArticleSkeletonProps) {
  return (
    <article className={cn("mx-auto max-w-3xl space-y-8", className)}>
      <div className="space-y-4">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-3.5 w-24" />
          </div>
          <Skeleton className="h-3.5 w-32" />
          <Skeleton className="h-3.5 w-20" />
        </div>
      </div>
      <Skeleton className="aspect-video w-full rounded-xl" />
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className={cn("h-4 w-full", i % 3 === 0 && "w-5/6")}
          />
        ))}
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-48" />
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </article>
  )
}
ArticleSkeleton.displayName = "ArticleSkeleton"

export { ArticleSkeleton, type ArticleSkeletonProps }
