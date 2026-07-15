"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { CartSummarySkeleton } from "./CartSummary"

export function CartSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      <div className="lg:col-span-8">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4 p-4 bg-surface rounded-xl border border-border/50 animate-pulse">
              <Skeleton className="shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-lg" />
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-2 w-16 rounded" />
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-5 w-24 rounded" />
                </div>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-3 w-12 rounded" />
                    <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="w-10 h-8" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-20 rounded-lg" />
                    <Skeleton className="h-8 w-20 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4">
        <CartSummarySkeleton />
      </div>
    </div>
  )
}