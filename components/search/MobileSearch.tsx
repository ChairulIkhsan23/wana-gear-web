"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ArrowLeft } from "lucide-react"
import { SearchOverlay } from "./SearchOverlay"

const POPULAR_SEARCHES_COUNT = 8
const CATEGORIES_COUNT = 7
const POPULAR_PRODUCTS_COUNT = 4
const POPULAR_TOTAL = POPULAR_SEARCHES_COUNT + CATEGORIES_COUNT + POPULAR_PRODUCTS_COUNT

interface MobileSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSearch({ isOpen, onClose }: MobileSearchProps) {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) return
    inputRef.current?.focus()
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

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
        if (selectedIndex >= 0) onClose()
        break
      case "Escape":
        onClose()
        break
    }
  }

  function handleSelect(searchTerm: string) {
    setQuery(searchTerm)
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-surface"
        >
          <div className="flex items-center gap-3 px-4 h-14 border-b border-border/50 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 -ml-1 text-foreground-secondary hover:text-foreground"
              aria-label="Tutup pencarian"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
              <input
                ref={inputRef}
                type="search"
                placeholder="Cari tenda, carrier, sepatu gunung..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(-1)
                  setIsLoading(true)
                  setTimeout(() => setIsLoading(false), 300)
                }}
                onKeyDown={handleKeyDown}
                className="w-full h-10 pl-10 pr-4 text-sm bg-muted rounded-xl border border-border/50 outline-none focus:bg-surface focus:border-primary/30 transition-all duration-200 placeholder:text-foreground-muted"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pb-safe-bottom">
            <SearchOverlay
              query={query}
              selectedIndex={selectedIndex}
              isLoading={isLoading}
              onSelect={handleSelect}
              isMobile
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
