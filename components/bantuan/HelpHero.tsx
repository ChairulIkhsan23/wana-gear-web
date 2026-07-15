"use client"

import { Search } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { useState } from "react"

export function HelpHero() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="relative overflow-hidden bg-foreground">
      {/* Background Image - Unsplash */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* Gradient Overlay - Memastikan teks terbaca */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

      {/* Additional dark overlay untuk readability */}
      <div className="absolute inset-0 bg-black/20" />

      <ContainerContent className="relative z-10">
        <div className="flex items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          <AnimatedSection as="div" className="w-full">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
                Pusat Bantuan
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-8 max-w-md">
                Temukan jawaban seputar penyewaan, pembayaran, pengiriman, hingga pengembalian perlengkapan outdoor.
              </p>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
                {/* Search Icon - Tanpa shape, langsung icon */}
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white stroke-[2.5] drop-shadow-lg z-10" />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari pertanyaan atau topik..."
                  className="w-full h-14 pl-12 pr-5 text-base bg-white/15 backdrop-blur-md rounded-xl outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/40 transition-all duration-200 placeholder:text-white/50 text-white shadow-lg"
                />
              </form>

              {/* Popular Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Cara menyewa", "Pembayaran", "Pengembalian", "Pickup", "Refund"].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="px-4 py-2 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-200"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContainerContent>
    </section>
  )
}