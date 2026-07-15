"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone, MessageSquare, Clock, MapPin, Bot, type LucideIcon } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { contactOptions } from "@/dummy/help"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, Mail, Phone, MessageSquare, MapPin, Bot,
}

export function ContactSection() {
  return (
    <section className="py-14 lg:py-18 bg-muted" id="contact">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            Hubungi Kami
          </h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Pilih metode komunikasi yang paling nyaman untuk kamu.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5 mb-8">
          {contactOptions.map((opt, index) => {
            const Icon = iconMap[opt.icon as string]
            const isDisabled = (opt as any).disabled
            const Wrapper = isDisabled ? "div" : Link
            return (
              <AnimatedSection key={index} as="div" delay={index * 0.05} className="h-full">
                <Wrapper
                  href={isDisabled ? "" : (opt.href as string)}
                  className={cn(
                    "flex flex-col p-5 bg-surface rounded-lg transition-all duration-300 group h-full",
                    isDisabled 
                      ? "opacity-60 cursor-not-allowed" 
                      : "hover:shadow-md hover:shadow-foreground/5 cursor-pointer"
                  )}
                  target={!isDisabled && (opt.href as string).startsWith("http") ? "_blank" : undefined}
                  rel={!isDisabled && (opt.href as string).startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-lg text-white mb-3 shrink-0 transition-transform duration-300",
                    isDisabled ? "bg-foreground-muted" : "bg-foreground group-hover:scale-105"
                  )}>
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{opt.title as string}</h3>
                  <p className="text-xs text-foreground-secondary mb-3">{opt.description as string}</p>
                  <span className="text-xs font-semibold text-foreground mt-auto">
                    {opt.action as string} {!isDisabled && "→"}
                  </span>
                </Wrapper>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection as="div" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-5 lg:p-6 bg-surface rounded-2xl border border-border/60 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-foreground">Jam Operasional Customer Service</h4>
              <div className="text-sm text-foreground-secondary mt-1 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span>Senin - Jumat: <strong className="font-semibold text-foreground">08:00 - 20:00</strong></span>
                <span className="hidden sm:inline-block text-border">•</span>
                <span>Sabtu: <strong className="font-semibold text-foreground">09:00 - 18:00</strong></span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ContainerContent>
    </section>
  )
}
