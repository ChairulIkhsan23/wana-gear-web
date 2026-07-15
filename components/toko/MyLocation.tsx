"use client"

import { useState } from "react"
import { Navigation, LocateFixed, Loader2 } from "lucide-react"
import type { Store } from "@/dummy/types"

interface MyLocationProps {
  store: Store
  onLocationChange: (loc: { lat: number; lng: number }) => void
  navUrl: string
}

function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export function MyLocation({ store, onLocationChange, navUrl }: MyLocationProps) {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolokasi tidak didukung browser ini.")
      return
    }

    setLoading(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLoc = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        setLocation(userLoc)
        onLocationChange(userLoc)

        const dist = haversineDistance(userLoc.lat, userLoc.lng, store.lat, store.lng)
        setDistance(dist)

        setLoading(false)
      },
      () => {
        setError("Gagal mendapatkan lokasi. Pastikan GPS aktif.")
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  const travelTime = distance ? Math.round(distance / 30 * 60) : null
  const travelHours = travelTime ? Math.floor(travelTime / 60) : 0
  const travelMinutes = travelTime ? travelTime % 60 : 0
  const travelLabel = travelTime
    ? travelHours > 0
      ? `${travelHours} jam ${travelMinutes} menit`
      : `${travelMinutes} menit`
    : ""

  return (
    <div className="p-5 rounded-2xl border border-border/50 bg-muted/50">
      {!location ? (
        <div className="flex flex-col items-center gap-3 text-center">
          <div>
            <p className="text-sm font-semibold text-foreground">Gunakan Lokasi Saya</p>
            <p className="text-xs text-foreground-muted mt-0.5">
              Dapatkan jarak dan estimasi waktu tempuh ke toko
            </p>
          </div>
          <button
            type="button"
            onClick={handleGetLocation}
            disabled={loading}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-md transition-all duration-200 disabled:opacity-50 active:scale-[0.97]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Mendeteksi...
              </>
            ) : (
              <>
                <LocateFixed className="w-4 h-4" />
                Gunakan Lokasi Saya
              </>
            )}
          </button>
          {error && <p className="text-xs text-danger">{error}</p>}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 text-center">
          <div>
            <p className="text-lg font-bold text-foreground">
              Jarak: {distance?.toFixed(1)} km
            </p>
              <p className="text-sm text-foreground-secondary mt-0.5">
                Estimasi: {travelLabel}
              </p>
          </div>
          <a
            href={navUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-md transition-all duration-200 active:scale-[0.97]"
          >
            Mulai Navigasi
            <Navigation className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  )
}
