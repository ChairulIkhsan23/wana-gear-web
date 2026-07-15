"use client"

import Link from "next/link"
import { FileText, Shield, Ban, RotateCcw, CheckCircle, type LucideIcon } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { policies } from "@/dummy/help"

const policyIcons: LucideIcon[] = [
  FileText, Shield, Ban, RotateCcw, CheckCircle,
]

export function PolicySection() {
  return (
    <section className="py-12 lg:py-16 bg-muted">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Kebijakan</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Informasi lengkap mengenai kebijakan WanaGear.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {policies.map((policy, index) => {
            const Icon = policyIcons[index]
            return (
              <AnimatedSection key={index} as="div" delay={index * 0.05}>
                <Link
                  href="#"
                  className="flex flex-col items-center text-center p-6 bg-surface rounded-lg hover:shadow-md hover:shadow-foreground/5 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{policy.title}</span>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </ContainerContent>
    </section>
  )
}
