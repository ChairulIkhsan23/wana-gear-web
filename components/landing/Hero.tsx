"use client"

import Image from "next/image"
import Link from "next/link"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { heroSlides } from "@/dummy/hero"

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplayPlugin]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative bg-foreground w-full overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  preload={slide.id === heroSlides[0].id}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
                <div className="absolute inset-0 mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-8 flex items-center justify-center sm:justify-start">
                  <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed mb-7 sm:mb-9 max-w-md mx-auto sm:mx-0">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                      <Link
                        href={slide.href}
                        className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-foreground hover:bg-white hover:text-foreground rounded-md transition-all duration-300 active:scale-[0.97]"
                      >
                        {slide.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="absolute bottom-16 sm:bottom-12 lg:bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "rounded-full transition-all duration-500",
              index === selectedIndex
                ? "bg-white w-6 h-1.5"
                : "bg-white/40 hover:bg-white/60 w-1.5 h-1.5"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
