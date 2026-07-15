"use client"

import { Truck, Shield, RotateCcw, UserCheck, Headset, type LucideIcon } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { services } from "@/dummy/stores"

const iconMap: Record<string, LucideIcon> = {
  Truck, Shield, RotateCcw, UserCheck, Headset,
}

export function ServiceCards() {
  return (
    <section className="py-14 lg:py-18 bg-muted">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-2">Informasi Layanan</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Nikmati berbagai layanan kami di toko WanaGear.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <AnimatedSection key={index} as="div" delay={index * 0.05} className="h-full">
                <div className="flex flex-col items-center text-center p-6 bg-surface rounded-lg hover:shadow-md hover:shadow-foreground/5 transition-all duration-300 group h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground text-white mb-4 group-hover:scale-105 transition-transform duration-300 shrink-0">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed mt-auto">{service.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </ContainerContent>
    </section>
  )
}
