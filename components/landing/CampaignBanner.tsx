"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContainerContent } from "./Container"
import { promos } from "@/dummy/promos"

export function CampaignBanner() {
  const latestPromos = promos.slice(0, 2)

  if (latestPromos.length < 2) return null

  return (
    <section className="py-14 lg:py-18 bg-surface">
      <ContainerContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {[0, 1].map((i) => (
            <Link
              key={latestPromos[i].id}
              href={i === 0 ? "/promo" : "/paket"}
              className="group relative overflow-hidden rounded-lg bg-foreground"
            >
              <div className="relative aspect-[4/3] lg:aspect-[3/2]">
                <Image
                  src={latestPromos[i].image}
                  alt={latestPromos[i].title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-2">{latestPromos[i].title}</h3>
                <p className="text-sm text-white/70 mb-4 max-w-sm leading-relaxed">{latestPromos[i].description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all duration-300">
                  {latestPromos[i].cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}
