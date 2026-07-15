"use client"

import Image from "next/image"
import { ContainerContent } from "./Container"
import { useBrands } from "@/features/product/hooks/useBrand"
import { EmblaCarousel } from "./EmblaCarousel"

const BRAND_IMAGE = "https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?q=80"

export function BrandSection() {
  const { data, isLoading } = useBrands()
  const brands = data?.data || []

  if (isLoading) {
    return (
      <section className="py-12 lg:py-16 bg-muted">
        <ContainerContent>
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
            Brand Pilihan Pendaki
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-6 md:-mx-8 md:px-8 lg:-mx-8 lg:px-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center gap-3 shrink-0 w-36 lg:w-44">
                <div className="w-full aspect-square bg-surface animate-pulse rounded-xl" />
                <div className="w-24 h-4 bg-surface animate-pulse rounded-md" />
              </div>
            ))}
          </div>
        </ContainerContent>
      </section>
    )
  }

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <ContainerContent>
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
          Brand Pilihan Pendaki
        </h2>
        <div className="-mx-4 md:-mx-8 px-4 md:px-8">
          <EmblaCarousel 
            slideClassName="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            showDots={false}
          >
            {brands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                className="flex flex-col items-center gap-3 group w-full py-2"
              >
                <div className="w-[85%] aspect-square overflow-hidden bg-surface rounded-xl shadow-sm border border-border/50 transition-shadow duration-300 group-hover:shadow-md group-hover:border-primary/30">
                  <Image
                    src={BRAND_IMAGE}
                    alt={brand.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-sm lg:text-base font-semibold text-foreground-secondary text-center leading-tight whitespace-nowrap group-hover:text-foreground transition-colors">
                  {brand.name}
                </span>
              </button>
            ))}
          </EmblaCarousel>
        </div>
      </ContainerContent>
    </section>
  )
}
