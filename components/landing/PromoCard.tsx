"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Promo } from "@/dummy/types"

export function PromoCard({ promo }: { promo: Promo }) {
  return (
    <Link
      href={promo.href}
      className={cn(
        "group bg-white rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30",
        promo.isNew && "ring-2 ring-primary/50"
      )}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {promo.isNew && (
          <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold text-white bg-primary rounded">
            Baru
          </span>
        )}
        <span className="absolute top-3 right-3 px-3 py-1 text-[11px] font-bold text-white bg-black/60 rounded-full">
          {promo.discount}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-semibold text-primary bg-primary/10 rounded">
            {promo.category}
          </span>
          <span className="text-[11px] text-foreground-muted">Berlaku s.d. {new Date(promo.validUntil).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>

        <h3 className="text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {promo.title}
        </h3>
        <p className="text-sm text-foreground-secondary line-clamp-2">{promo.description}</p>

        <div className="pt-2 border-t border-border/50">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
            {promo.cta}
          </span>
        </div>
      </div>
    </Link>
  )
}