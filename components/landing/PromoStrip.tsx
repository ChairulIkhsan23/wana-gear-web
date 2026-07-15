"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { ContainerContent } from "./Container"

const promos = [
  { emoji: "🎟️", text: "VOUCHER TANGGAL KEMBAR S/D 77RB!", cta: "Cek di sini", href: "#" },
  { emoji: "🏕️", text: "SEWA PAKET LENGKAP HEMAT 30%!", cta: "Lihat Paket", href: "/paket" },
  { emoji: "🚚", text: "GRATIS ONGKIR AREA JABODETABEK!", cta: "Syarat & Ketentuan", href: "#" },
  { emoji: "🔥", text: "DISKON SPESIAL MEMBER BARU 20%!", cta: "Daftar Sekarang", href: "/auth/register" },
]

function getRemaining(): { d: number; h: number; m: number; s: number } {
  const now = new Date()
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59)
  const diff = end.getTime() - now.getTime()
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  const total = Math.floor(diff / 1000)
  return {
    d: Math.floor(total / 86400),
    h: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  }
}

export function PromoStrip() {
  const [visible, setVisible] = useState(true)
  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [promoIndex, setPromoIndex] = useState(0)

  useEffect(() => {
    const tick = () => setRemaining(getRemaining())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promos.length)
    }, 10000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null

  const promo = promos[promoIndex]

  return (
    <div className="relative bg-primary">
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-full px-1 text-white hover:bg-white/10 transition-colors"
        aria-label="Tutup promo"
      >
        <X className="w-4 h-4 stroke-2" />
      </button>
      <ContainerContent as="div" className="py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-x-2 gap-y-1 py-2.5 pl-8 sm:pl-0 text-xs sm:text-sm text-white text-left sm:text-center">
          <span className="text-base sm:text-lg leading-none">{promo.emoji}</span>
          <span className="font-semibold sm:font-medium">
            {promo.text}
          </span>
          <span className="inline-flex items-center gap-1 text-white/90">
            <span className="inline-flex items-center gap-0.5 bg-white/15 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold tabular-nums">
              {String(remaining.d).padStart(2, "0")}d
            </span>
            <span className="inline-flex items-center gap-0.5 bg-white/15 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold tabular-nums">
              {String(remaining.h).padStart(2, "0")}h
            </span>
            <span className="inline-flex items-center gap-0.5 bg-white/15 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold tabular-nums">
              {String(remaining.m).padStart(2, "0")}m
            </span>
            <span className="inline-flex items-center gap-0.5 bg-white/15 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold tabular-nums">
              {String(remaining.s).padStart(2, "0")}s
            </span>
          </span>
          <Link
            href={promo.href}
            className="inline-flex items-center gap-1 font-semibold text-white hover:text-white/80 transition-colors"
          >
            {promo.cta}
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </ContainerContent>
    </div>
  )
}
