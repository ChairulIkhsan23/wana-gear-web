export function SearchSkeleton() {
  return (
    <div className="flex gap-8 p-6 animate-pulse">
      <div className="w-[35%] space-y-4">
        <div className="h-3 w-28 bg-muted rounded" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 bg-muted rounded-lg" />
        ))}
      </div>
      <div className="flex-1 space-y-4">
        <div className="h-3 w-24 bg-muted rounded" />
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-3 p-2.5">
              <div className="w-20 h-20 bg-muted rounded-lg shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-3 w-full bg-muted rounded" />
                <div className="h-2.5 w-16 bg-muted rounded" />
                <div className="h-3 w-20 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
