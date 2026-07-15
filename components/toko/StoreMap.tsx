"use client"

import { useEffect, useRef } from "react"
import type L from "leaflet"
import type { Store } from "@/dummy/types"

interface StoreMapProps {
  stores: Store[]
  userLocation: { lat: number; lng: number } | null
  selectedStore: Store | null
  onSelectStore: (store: Store) => void
}

export function StoreMap({ stores, userLocation, selectedStore, onSelectStore }: StoreMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])
  const userMarkerRef = useRef<L.Marker | null>(null)
  const routeLayerRef = useRef<L.Polyline | null>(null)
  const LRef = useRef<typeof L | null>(null)
  const initializedRef = useRef(false)

  // Init map once
  useEffect(() => {
    if (!mapRef.current || initializedRef.current) return
    initializedRef.current = true

    const init = async () => {
      const L = (await import("leaflet")).default
      await import("leaflet/dist/leaflet.css")
      LRef.current = L

      const map = L.map(mapRef.current!, {
        center: [stores[0]?.lat ?? -6.2088, stores[0]?.lng ?? 106.8456],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true,
      })

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map)

      // Store marker icon
      const markerIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          width: 40px; height: 40px;
          background: #1a6b3c;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
        ">🏕️</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      })

      // Store markers
      stores.forEach((store) => {
        const marker = L.marker([store.lat, store.lng], { icon: markerIcon }).addTo(map)

        marker.bindPopup(`
          <div style="font-family: system-ui; min-width: 200px;">
            <strong style="color: #1a6b3c; font-size: 14px;">${store.name}</strong>
            <p style="margin: 4px 0; font-size: 12px; color: #666;">${store.address}</p>
            <p style="margin: 4px 0; font-size: 12px; color: #666;">
              ${store.hours[0].day}: ${store.hours[0].open} - ${store.hours[0].close}
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}"
               target="_blank" rel="noopener noreferrer"
               style="display: inline-block; margin-top: 8px; padding: 6px 16px;
                      background: #1a6b3c; color: white; border-radius: 20px;
                      text-decoration: none; font-size: 12px; font-weight: 600;">
              Mulai Navigasi →
            </a>
          </div>
        `)

        marker.on("click", () => onSelectStore(store))
        markersRef.current.push(marker)
      })

      mapInstanceRef.current = map
      initializedRef.current = true
    }

    init()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        initializedRef.current = false
        markersRef.current = []
        userMarkerRef.current = null
        routeLayerRef.current = null
      }
    }
  }, [stores, onSelectStore])

  // Update user location marker
  useEffect(() => {
    const map = mapInstanceRef.current
    const L = LRef.current
    if (!map || !L) return

    if (userMarkerRef.current) {
      userMarkerRef.current.remove()
      userMarkerRef.current = null
    }

    if (!userLocation) return

    const userIcon = L.divIcon({
      className: "user-marker",
      html: `<div style="
        width: 24px; height: 24px;
        background: #3b82f6;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })

    userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], {
      icon: userIcon,
    }).addTo(map)

    map.setView([userLocation.lat, userLocation.lng], 14, {
      animate: true,
      duration: 1,
    })
  }, [userLocation])

  // Zoom to selected store
  useEffect(() => {
    if (!selectedStore || !mapInstanceRef.current) return
    mapInstanceRef.current.setView([selectedStore.lat, selectedStore.lng], 16, {
      animate: true,
      duration: 1,
    })
  }, [selectedStore])

  // Draw route when user location changes
  useEffect(() => {
    const map = mapInstanceRef.current
    const L = LRef.current
    if (!map || !L) return

    if (routeLayerRef.current) {
      routeLayerRef.current.remove()
      routeLayerRef.current = null
    }

    if (!userLocation || !selectedStore) return

    const fetchRoute = async () => {
      const url = `https://router.project-osrm.org/route/v1/driving/${userLocation.lng},${userLocation.lat};${selectedStore.lng},${selectedStore.lat}?geometries=geojson&overview=full`

      try {
        const res = await fetch(url)
        const data = await res.json()

        if (data.code !== "Ok" || !data.routes?.length) return

        const coords = data.routes[0].geometry.coordinates.map(
          (c: [number, number]) => [c[1], c[0]] as [number, number]
        )

        const polyline = L.polyline(coords, {
          color: "#1a6b3c",
          weight: 4,
          opacity: 0.7,
          dashArray: "8, 12",
        }).addTo(map)

        routeLayerRef.current = polyline

        const bounds = L.latLngBounds(
          [userLocation.lat, userLocation.lng],
          [selectedStore.lat, selectedStore.lng]
        )
        map.fitBounds(bounds, { padding: [60, 60], animate: true, duration: 1 })
      } catch {
        // Silently fail
      }
    }

    fetchRoute()
  }, [userLocation, selectedStore])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border/50 z-0"
      style={{ background: "#e8e8e5" }}
    />
  )
}
