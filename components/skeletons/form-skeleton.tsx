import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface FormSkeletonProps {
  className?: string
  fields?: number
}

function FormSkeleton({ className, fields = 4 }: FormSkeletonProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>
      <div className="space-y-5 rounded-xl border border-border p-6">
        {Array.from({ length: fields }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-10 w-full rounded-lg" />
            {i === 0 && <Skeleton className="h-3 w-48" />}
          </div>
        ))}
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-11 flex-1 rounded-lg" />
          <Skeleton className="h-11 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
FormSkeleton.displayName = "FormSkeleton"

export { FormSkeleton, type FormSkeletonProps }
