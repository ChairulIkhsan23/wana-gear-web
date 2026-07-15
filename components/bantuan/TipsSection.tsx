"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { tips } from "@/dummy/faq"

export function TipsSection() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Tips Outdoor</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Artikel singkat seputar persiapan dan perawatan perlengkapan outdoor.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {tips.map((tip, index) => (
            <AnimatedSection key={index} as="div" delay={index * 0.05}>
              <Link
                href="#"
                className="flex flex-col sm:flex-row gap-4 p-4 bg-muted rounded-2xl hover:bg-primary-light/30 hover:shadow-sm hover:shadow-foreground/5 transition-all duration-300 group"
              >
                <div className="relative w-full sm:w-36 h-36 shrink-0 rounded-xl overflow-hidden bg-border">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="144px"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                    {tip.tag}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed line-clamp-2 mb-2">
                    {tip.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Baca Selengkapnya
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}
