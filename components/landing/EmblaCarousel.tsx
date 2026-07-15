"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { cn } from "@/lib/utils"

interface EmblaCarouselProps {
  children: ReactNode
  autoplayInterval?: number
  loop?: boolean
  showDots?: boolean
  pauseOnHover?: boolean
  className?: string
  slideClassName?: string
}

export function EmblaCarousel({
  children,
  autoplayInterval = 4000,
  loop = true,
  showDots = true,
  pauseOnHover = true,
  className,
  slideClassName,
}: EmblaCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const [autoplayPlugin] = useState(() =>
    Autoplay({
      delay: autoplayInterval,
      stopOnInteraction: false,
      stopOnMouseEnter: pauseOnHover,
    })
  )
  
  const [wheelGesturesPlugin] = useState(() => WheelGesturesPlugin())

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: "center", slidesToScroll: 1, dragFree: true },
    [autoplayPlugin, wheelGesturesPlugin]
  )

  const isInitialRef = useRef(true)

  const updateScrollSnaps = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    if (isInitialRef.current) {
      isInitialRef.current = false
      updateScrollSnaps()
    }
    
    emblaApi.on("select", updateScrollSnaps)
    emblaApi.on("reInit", updateScrollSnaps)
    
    const handleResize = () => {
      emblaApi.reInit()
    }
    window.addEventListener("resize", handleResize)
    
    return () => {
      emblaApi.off("select", updateScrollSnaps)
      emblaApi.off("reInit", updateScrollSnaps)
      window.removeEventListener("resize", handleResize)
    }
  }, [emblaApi, updateScrollSnaps])

  const childrenArray = Array.isArray(children) ? children : [children]

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-2 lg:-ml-3">
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className={cn(
                "min-w-0 flex-shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/4 px-2 lg:px-3",
                slideClassName
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "rounded-full transition-all duration-500",
                index === selectedIndex
                  ? "bg-foreground w-6 h-1.5"
                  : "bg-border hover:bg-foreground-muted w-1.5 h-1.5"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
