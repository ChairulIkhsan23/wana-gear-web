"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { faqs } from "@/dummy/stores"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            Pertanyaan Umum
          </h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Informasi penting sebelum berkunjung ke toko.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} as="div" delay={index * 0.05}>
              <div className="border border-border/50 rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  type="button"
                  onClick={() => setOpenId(openId === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left bg-surface hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-foreground-muted shrink-0 transition-transform duration-200",
                      openId === index && "rotate-180"
                    )}
                  />
                </button>
                {openId === index && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {faq.answer}
                    </p>
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
