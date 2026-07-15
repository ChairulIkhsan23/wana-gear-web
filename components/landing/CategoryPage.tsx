"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Filter, X, Check } from "lucide-react"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { ProductCard, ProductCardSkeleton } from "./ProductCard"
import { cn } from "@/lib/utils"
import { useCategory } from "@/features/product/hooks/useCategory"
import { useProducts } from "@/features/product/hooks/useProduct"
import * as Dialog from "@radix-ui/react-dialog"

const SORT_OPTIONS = [
  { label: "Terbaru", value: "latest" },
  { label: "Harga Terendah", value: "cheapest" },
  { label: "Harga Tertinggi", value: "most_expensive" },
  { label: "Paling Populer", value: "popular" },
  { label: "Rating Tertinggi", value: "rating" },
]

// Mock filter options based on user requirements
const CATEGORIES = [
  {
    name: "Camping",
    children: ["Tenda", "Sleeping Bag", "Matras"]
  },
  {
    name: "Hiking",
    children: ["Carrier", "Daypack", "Tracking Pole"]
  },
  {
    name: "Cooking",
    children: ["Kompor", "Cooking Set", "Gas"]
  },
  {
    name: "Accessories",
    children: ["Headlamp", "Dry Bag", "Rain Cover"]
  }
]

const BRANDS = ["Naturehike", "Consina", "Eiger", "Rei", "Avtech", "Arei"]

export function CategoryPage({ slug }: { slug: string }) {
  const isAll = slug === "all"
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("latest")
  const [sortOpen, setSortOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  // Filter States
  const [selectedCats, setSelectedCats] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [openAccordions, setOpenAccordions] = useState<string[]>(CATEGORIES.map(c => c.name))

  const { data: catRes, isLoading: catLoading } = useCategory(isAll ? "" : slug)
  const category = catRes?.data
  
  const { data: productRes, isLoading: prodLoading } = useProducts({
    category: isAll ? undefined : slug,
    sort,
    page,
    per_page: 12,
  })
  const products = productRes?.data || []
  const meta = productRes?.meta
  const lastPage = meta?.pagination?.last_page || 1
  const isLoading = (catLoading && !isAll) || prodLoading

  const toggleAccordion = (name: string) => {
    setOpenAccordions(prev => 
      prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
    )
  }

  const toggleCategory = (cat: string) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const resetFilters = () => {
    setSelectedCats([])
    setMinPrice("")
    setMaxPrice("")
    setSelectedBrands([])
    setSort("latest")
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground text-lg">Filter</h3>
        <button 
          onClick={resetFilters}
          className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Categories Accordion */}
      <div className="space-y-4">
        <h4 className="font-medium text-foreground">Kategori</h4>
        {CATEGORIES.map((catGroup) => (
          <div key={catGroup.name} className="border-b border-border/50 pb-2">
            <button 
              type="button"
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => toggleAccordion(catGroup.name)}
            >
              {catGroup.name}
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform duration-200",
                openAccordions.includes(catGroup.name) ? "rotate-180" : ""
              )} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all duration-300",
              openAccordions.includes(catGroup.name) ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="flex flex-col gap-2 pb-2">
                {catGroup.children.map(child => (
                  <button type="button" key={child} className="flex items-center gap-2 cursor-pointer group w-full text-left" onClick={() => toggleCategory(child)}>
                    <div className={cn(
                      "w-4 h-4 rounded border flex items-center justify-center transition-all duration-200",
                      selectedCats.includes(child) 
                        ? "bg-primary border-primary" 
                        : "border-input bg-surface group-hover:border-primary"
                    )}>
                      {selectedCats.includes(child) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                      {child}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Harga</h4>
        <div className="flex items-center gap-2">
          <input 
            type="number" 
            placeholder="Min" 
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-surface text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
          />
          <span className="text-foreground-secondary">-</span>
          <input 
            type="number" 
            placeholder="Max" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-surface text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
          />
        </div>
      </div>

      {/* Brand */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Brand</h4>
        <div className="flex flex-col gap-2.5">
          {BRANDS.map(brand => (
            <button type="button" key={brand} className="flex items-center gap-2 cursor-pointer group w-full text-left" onClick={() => toggleBrand(brand)}>
              <div className={cn(
                "w-4 h-4 rounded border flex items-center justify-center transition-all duration-200",
                selectedBrands.includes(brand) 
                  ? "bg-primary border-primary" 
                  : "border-input bg-surface group-hover:border-primary"
              )}>
                {selectedBrands.includes(brand) && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-8 lg:py-10 bg-surface min-h-screen">
      <ContainerContent>
        <Breadcrumbs />

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                {isLoading && !isAll ? (
                  <div className="w-48 h-8 bg-muted animate-pulse rounded" />
                ) : (
                  <>
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight capitalize">
                      {isAll ? "Semua Peralatan" : (category?.name || slug)}
                    </h1>
                    {category?.description && !isAll && (
                      <p className="text-sm text-foreground-secondary mt-1.5">{category.description}</p>
                    )}
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <Dialog.Root open={filterOpen} onOpenChange={setFilterOpen}>
                  <Dialog.Trigger asChild>
                    <button className="lg:hidden flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-muted rounded-xl hover:bg-border transition-colors">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 transition-opacity" />
                    <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-surface p-6 shadow-xl overflow-y-auto outline-none">
                      <div className="flex justify-end mb-4">
                        <Dialog.Close asChild>
                          <button className="p-2 text-foreground-secondary hover:text-foreground rounded-full hover:bg-muted transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </Dialog.Close>
                      </div>
                      <FilterContent />
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                {/* Sort */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-muted rounded-xl hover:bg-border transition-colors whitespace-nowrap"
                  >
                    {SORT_OPTIONS.find((o) => o.value === sort)?.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-surface rounded-xl shadow-xl border border-border overflow-hidden z-40">
                      {SORT_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setSort(opt.value)
                            setSortOpen(false)
                            setPage(1)
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2.5 text-sm transition-colors",
                            sort === opt.value
                              ? "text-primary bg-primary/5 font-semibold"
                              : "text-foreground-secondary hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16 bg-muted/30 rounded-2xl border border-dashed border-border">
                <p className="text-foreground-secondary">Tidak ada produk yang sesuai dengan filter.</p>
                <button 
                  onClick={resetFilters}
                  className="mt-4 px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                  {products.map((product: { id: number }) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {lastPage > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      type="button"
                      onClick={() => setPage(Math.max(1, page - 1))}
                      disabled={page <= 1}
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-muted text-foreground-secondary hover:bg-border disabled:opacity-40 transition-all"
                    >
                      Sebelumnya
                    </button>
                    {Array.from({ length: lastPage }).map((_, i) => (
                      <button
                        key={i + 1}
                        type="button"
                        onClick={() => setPage(i + 1)}
                        className={cn(
                          "w-10 h-10 text-sm font-medium rounded-lg transition-all",
                          page === i + 1
                            ? "bg-primary text-white"
                            : "bg-muted text-foreground-secondary hover:bg-border"
                        )}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setPage(Math.min(lastPage, page + 1))}
                      disabled={page >= lastPage}
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-muted text-foreground-secondary hover:bg-border disabled:opacity-40 transition-all"
                    >
                      Selanjutnya
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </ContainerContent>
    </section>
  )
}
