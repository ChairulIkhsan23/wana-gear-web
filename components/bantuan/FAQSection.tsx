"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { faqCategories } from "@/dummy/faq"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("rental")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (catId: string, idx: number) => {
    const key = `${catId}-${idx}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            Pertanyaan Umum
          </h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Temukan jawaban cepat untuk pertanyaan yang sering diajukan.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqCategories.map((cat, catIdx) => (
            <AnimatedSection key={cat.id} as="div" delay={catIdx * 0.05}>
              <div className="rounded-2xl border border-border/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory(openCategory === cat.id ? null : cat.id)
                  }
                  className="flex items-center justify-between w-full px-5 py-4 bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-bold text-foreground">{cat.title}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-foreground-muted transition-transform duration-200",
                      openCategory === cat.id && "rotate-180"
                    )}
                  />
                </button>

                {openCategory === cat.id && (
                  <div className="divide-y divide-border/30">
                    {cat.items.map((item, idx) => {
                      const key = `${cat.id}-${idx}`
                      const isOpen = openItems[key]
                      return (
                        <div key={idx}>
                          <button
                            type="button"
                            onClick={() => toggleItem(cat.id, idx)}
                            className="flex items-center justify-between w-full px-5 py-3.5 text-left hover:bg-muted/30 transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">{item.q}</span>
                            <ChevronDown
                              className={cn(
                                "w-3.5 h-3.5 text-foreground-muted shrink-0 ml-4 transition-transform duration-200",
                                isOpen && "rotate-180"
                              )}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-4">
                              <p className="text-sm text-foreground-secondary leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}
