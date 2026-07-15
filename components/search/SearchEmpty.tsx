import { SearchX } from "lucide-react"

export function SearchEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
        <SearchX className="w-6 h-6 text-foreground-muted" />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-1">Tidak ada hasil</h3>
      <p className="text-sm text-foreground-secondary">Coba kata kunci lain.</p>
    </div>
  )
}
