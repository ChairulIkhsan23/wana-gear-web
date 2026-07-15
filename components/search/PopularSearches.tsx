import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { popularSearches } from "@/dummy/popular-searches"
const categories: { id: string; name: string; slug: string }[] = [
  { id: "c1", name: "Hiking", slug: "hiking" },
  { id: "c2", name: "Camping", slug: "camping" },
  { id: "c3", name: "Climbing", slug: "climbing" },
  { id: "c4", name: "Accessories", slug: "accessories" },
]

interface PopularSearchesProps {
  onSelect: (query: string) => void
  selectedIndex: number
  startIndex: number
}

export function PopularSearches({ onSelect, selectedIndex, startIndex }: PopularSearchesProps) {
  return (
    <div className="p-5 lg:p-6">
      <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">
        Pencarian Populer
      </h3>
      <div className="space-y-0.5 mb-6">
        {popularSearches.map((item, i) => {
          const idx = startIndex + i
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onSelect(item.label)}
              className={cn(
                "flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm transition-colors text-left",
                selectedIndex === idx
                  ? "bg-foreground/5 text-primary font-medium"
                  : "text-foreground-secondary hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>

      <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">
        Kategori Populer
      </h3>
      <div className="space-y-0.5">
        {categories
          .filter((c) => c.slug !== "all")
          .map((cat, i) => {
            const idx = startIndex + popularSearches.length + i
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelect(cat.name)}
                className={cn(
                  "flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors",
                  selectedIndex === idx
                    ? "bg-foreground/5 text-primary font-medium"
                    : "text-foreground-secondary hover:text-foreground hover:bg-foreground/5"
                )}
              >
                <span>{cat.name}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )
          })}
      </div>
    </div>
  )
}
