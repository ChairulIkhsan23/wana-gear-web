"use client"

import Image from "next/image"
import Link from "next/link"
import { ContainerContent } from "@/components/landing/Container"
import { EmblaCarousel } from "@/components/landing/EmblaCarousel"
import { recommendedProducts } from "@/dummy/cart"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

export function RecommendedProducts() {
  return (
    <section className="py-14 lg:py-18 bg-muted">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-8">
            Lengkapi Peralatanmu
          </h2>
        </AnimatedSection>

        <EmblaCarousel className="group">
          {recommendedProducts.map((product) => (
            <Link
              key={product.id}
              href="#"
              className="group/card flex flex-col bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-foreground/5"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover/card:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-3">
                <p className="text-[11px] text-foreground-muted uppercase tracking-widest">{product.brand}</p>
                <p className="text-sm font-semibold text-foreground line-clamp-1 mt-0.5">{product.name}</p>
                <p className="text-sm font-bold text-foreground mt-1">
                  {rupiah(product.price)}
                  <span className="text-[10px] font-medium text-foreground-muted">/hari</span>
                </p>
              </div>
            </Link>
          ))}
        </EmblaCarousel>
      </ContainerContent>
    </section>
  )
}
