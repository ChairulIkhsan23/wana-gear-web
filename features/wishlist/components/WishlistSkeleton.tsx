"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function WishlistSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col h-full bg-surface rounded-xl border border-border overflow-hidden">
          <Skeleton className="aspect-square w-full" />
          <div className="flex flex-col flex-1 p-4 pb-5">
            <Skeleton className="h-3 w-16 rounded mb-2" />
            <Skeleton className="h-4 w-full rounded mb-1.5" />
            <Skeleton className="h-4 w-3/4 rounded" />
            <div className="mt-auto flex flex-col gap-2 pt-4">
              <Skeleton className="flex gap-1">
                <Skeleton className="h-3 w-12 rounded" />
              </Skeleton>
              <Skeleton className="h-5 w-24 rounded" />
              <Skeleton className="h-3 w-16 rounded mt-0.5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}