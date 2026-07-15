"use client"

import Link from "next/link"
import { PackageSearch, Headphones, Store, BookOpen, CreditCard, Package, FileText, Undo2, type LucideIcon } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { quickActions } from "@/dummy/help"

const iconMap: Record<string, LucideIcon> = {
  PackageSearch, Headphones, Store, BookOpen, CreditCard, Package, FileText, Undo2,
}

export function QuickActions() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8">
            Yang Sering Dibutuhkan
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5">
          {quickActions.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <AnimatedSection key={index} as="div" delay={index * 0.05}>
                <Link
                  href="#"
                  className="flex flex-col items-center text-center p-6 bg-surface rounded-lg hover:shadow-md hover:shadow-foreground/5 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed">{item.description}</p>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </ContainerContent>
    </section>
  )
}
