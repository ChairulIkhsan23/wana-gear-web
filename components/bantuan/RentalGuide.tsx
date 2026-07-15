"use client"

import { Search, CalendarDays, ShoppingCart, CreditCard, Package, Mountain, Undo2, type LucideIcon } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { rentalSteps } from "@/dummy/help"

const iconMap: Record<string, LucideIcon> = {
  Search, CalendarDays, ShoppingCart, CreditCard, Package, Mountain, Undo2,
}

export function RentalGuide() {
  return (
    <section className="py-12 lg:py-16 bg-muted">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            Panduan Rental
          </h2>
          <p className="text-sm text-foreground-secondary mb-10">
            Proses mudah menyewa perlengkapan outdoor di WanaGear.
          </p>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8 sm:space-y-0">
            {rentalSteps.map((step, index) => {
              const Icon = iconMap[step.icon]
              return (
                <AnimatedSection key={step.step} as="div" delay={index * 0.08}>
                  <div className="relative sm:flex items-start gap-6 group">
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-sm font-bold shrink-0 relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="flex sm:hidden items-center gap-4 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                        {step.step}
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary-light text-primary shrink-0">
                        {Icon && <Icon className="w-4 h-4" />}
                      </div>
                    </div>
                    <div className="flex-1 sm:pb-10">
                      <div className="hidden sm:flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary-light text-primary shrink-0">
                          {Icon && <Icon className="w-4 h-4" />}
                        </div>
                        <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                      </div>
                      <h3 className="sm:hidden text-sm font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-foreground-secondary leading-relaxed ml-0 sm:ml-11">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </ContainerContent>
    </section>
  )
}
