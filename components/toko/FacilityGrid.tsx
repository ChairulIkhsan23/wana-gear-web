"use client"

import { Car, Sofa, Wifi, LucideProps, type LucideIcon } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { facilities } from "@/dummy/stores"
import { forwardRef } from "react"

const Mosque = forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
  <svg ref={ref} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3Z" />
    <path d="M5 10h14v2H5z" />
    <path d="M3 22h18v-2H3z" />
    <path d="M8 14v4" />
    <path d="M16 14v4" />
    <circle cx="12" cy="7" r="1" />
  </svg>
))
Mosque.displayName = "Mosque"

const Toilet = forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
  <svg ref={ref} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16" />
    <path d="M6 6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M10 11v4" />
    <path d="M14 11v4" />
  </svg>
))
Toilet.displayName = "Toilet"

const CreditCardCustom = forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
  <svg ref={ref} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
))
CreditCardCustom.displayName = "CreditCardCustom"

const customIconMap: Record<string, LucideIcon> = {
  Car, Sofa, Wifi, Mosque, Toilet,
  CreditCard: CreditCardCustom,
}

export function FacilityGrid() {
  return (
    <section className="py-14 lg:py-18 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Fasilitas Toko</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Nikmati kenyamanan berkunjung ke toko WanaGear.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 lg:gap-6">
          {facilities.map((item, index) => {
            const Icon = customIconMap[item.icon]
            return (
              <AnimatedSection key={item.id} as="div" delay={index * 0.05}>
                <div className="flex flex-col items-center gap-3 p-5 bg-muted rounded-lg hover:bg-foreground/5 transition-colors duration-200 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground text-white">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-medium text-foreground-secondary text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </ContainerContent>
    </section>
  )
}
