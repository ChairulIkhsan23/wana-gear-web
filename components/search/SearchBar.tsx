"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Search } from "lucide-react"
import { SearchOverlay } from "./SearchOverlay"

const POPULAR_SEARCHES_COUNT = 8
const CATEGORIES_COUNT = 7
const POPULAR_PRODUCTS_COUNT = 4
const POPULAR_TOTAL = POPULAR_SEARCHES_COUNT + CATEGORIES_COUNT + POPULAR_PRODUCTS_COUNT

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [overlayTop, setOverlayTop] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery("")
    setSelectedIndex(-1)
    inputRef.current?.blur()
  }, [])

  function open() {
    const input = inputRef.current
    if (input) {
      const rect = input.getBoundingClientRect()
      setOverlayTop(rect.bottom + 8)
    }
    setIsOpen(true)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [close])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [close])

  const getResultCount = useCallback(() => {
    if (!query) return POPULAR_TOTAL
    return 0
  }, [query])

  function handleKeyDown(e: React.KeyboardEvent) {
    const total = getResultCount()

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < total - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : total - 1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          setIsOpen(false)
          setQuery("")
          setSelectedIndex(-1)
          inputRef.current?.blur()
        }
        break
      case "Escape":
        close()
        break
    }
  }

  function handleSelect(searchTerm: string) {
    setQuery(searchTerm)
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 400)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
        <input
          ref={inputRef}
          type="search"
          placeholder="Cari tenda, carrier, sepatu gunung..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            open()
            setSelectedIndex(-1)
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 300)
          }}
          onFocus={open}
          onKeyDown={handleKeyDown}
          className="w-full h-10 pl-10 pr-4 text-sm bg-muted rounded-xl border border-border/50 outline-none focus:bg-surface focus:border-primary/30 transition-all duration-200 placeholder:text-foreground-muted"
        />
      </div>

      {isOpen && (
        <SearchOverlay
          query={query}
          selectedIndex={selectedIndex}
          isLoading={isLoading}
          onSelect={handleSelect}
          overlayTop={overlayTop}
        />
      )}
    </div>
  )
}
