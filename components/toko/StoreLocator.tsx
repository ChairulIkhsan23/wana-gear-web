"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { MyLocation } from "./MyLocation"
import type { Store } from "@/dummy/types"
import { stores } from "@/dummy/stores"
import { cn } from "@/lib/utils"

const StoreMap = dynamic(() => import("./StoreMap").then((m) => m.StoreMap), { ssr: false })

export function StoreLocator() {
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0])
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  const handleSelectStore = (store: Store) => setSelectedStore(store)

  const navUrl = userLocation
    ? `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${selectedStore.lat},${selectedStore.lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${selectedStore.lat},${selectedStore.lng}`

  return (
    <section id="store-locator" className="py-14 lg:py-18 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-2">Lokasi Toko</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Temukan toko WanaGear terdekat.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-5">
            {stores.map((store) => (
              <AnimatedSection key={store.id} as="div" delay={0.1}>
                <button
                  type="button"
                  onClick={() => handleSelectStore(store)}
                  className={cn(
                    "w-full text-left p-5 rounded-lg transition-all duration-200",
                    selectedStore.id === store.id
                      ? "bg-foreground text-white shadow-md"
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={cn("text-base font-bold", selectedStore.id === store.id ? "text-white" : "text-foreground")}>
                        {store.name}
                      </h3>
                      <span
                        className={cn(
                          "inline-block mt-1 px-2.5 py-0.5 text-[11px] font-semibold rounded",
                          true
                            ? selectedStore.id === store.id ? "bg-white/20 text-white" : "bg-success/10 text-success"
                            : "bg-foreground-muted/10 text-foreground-muted"
                        )}
                      >
                        {"Buka Sekarang"}
                      </span>
                    </div>
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-lg shrink-0",
                      selectedStore.id === store.id ? "bg-white/20" : "bg-foreground text-white"
                    )}>
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                  <div className={cn("space-y-2 text-sm", selectedStore.id === store.id ? "text-white/70" : "text-foreground-secondary")}>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 opacity-50" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 shrink-0 opacity-50" />
                      <span>{store.hours.map((h) => `${h.day}: ${h.open} - ${h.close}`).join(" | ")}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 shrink-0 opacity-50" />
                      <a href={`tel:${store.phone}`} className={cn("transition-colors", selectedStore.id === store.id ? "hover:text-white" : "hover:text-foreground")}>
                        {store.phone}
                      </a>
                    </div>
                    {store.email && (
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 shrink-0 opacity-50" />
                      <a href={`mailto:${store.email}`} className={cn("transition-colors", selectedStore.id === store.id ? "hover:text-white" : "hover:text-foreground")}>
                        {store.email}
                      </a>
                    </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <a
                      href={`tel:${store.phone}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200",
                        selectedStore.id === store.id
                          ? "bg-white text-foreground hover:bg-white/90"
                          : "bg-foreground text-white hover:bg-foreground/90"
                      )}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Hubungi
                    </a>
                    <a
                      href={navUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200",
                        selectedStore.id === store.id
                          ? "text-white/70 hover:text-white ring-1 ring-white/20"
                          : "text-foreground-secondary hover:text-foreground ring-1 ring-border/50"
                      )}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Lihat Detail
                    </a>
                  </div>
                </button>
              </AnimatedSection>
            ))}

            <AnimatedSection as="div" delay={0.2}>
              <MyLocation store={selectedStore} onLocationChange={setUserLocation} navUrl={navUrl} />
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3" id="map">
            <AnimatedSection as="div" delay={0.15}>
              <StoreMap stores={stores} userLocation={userLocation} selectedStore={selectedStore} onSelectStore={handleSelectStore} />
            </AnimatedSection>
          </div>
        </div>
      </ContainerContent>
    </section>
  )
}
