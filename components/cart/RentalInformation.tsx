"use client"

import { CalendarDays, ChevronDown, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/landing/AnimatedSection"

interface RentalInformationProps {
  startDate: string
  endDate: string
  duration: number
  pickupMethod: string
  onStartDateChange: (v: string) => void
  onEndDateChange: (v: string) => void
  onPickupMethodChange: (v: string) => void
}

export function RentalInformation({
  startDate,
  endDate,
  duration,
  pickupMethod,
  onStartDateChange,
  onEndDateChange,
  onPickupMethodChange,
}: RentalInformationProps) {
  return (
    <AnimatedSection as="div" delay={0.05}>
      <div className="bg-surface rounded-lg p-5 lg:p-6">
        <h2 className="text-sm font-bold text-foreground mb-4">Informasi Penyewaan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
              Tanggal Mulai
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="w-full h-10 pl-10 pr-3 text-sm bg-muted rounded-md outline-none ring-1 ring-border/50 focus:ring-foreground/20 transition-all duration-200 text-foreground"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
              Tanggal Selesai
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                className="w-full h-10 pl-10 pr-3 text-sm bg-muted rounded-md outline-none ring-1 ring-border/50 focus:ring-foreground/20 transition-all duration-200 text-foreground"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
              Durasi Sewa
            </label>
            <div className="flex items-center h-10 px-3 bg-muted rounded-md ring-1 ring-border/50 text-sm text-foreground-secondary">
              <Clock className="w-4 h-4 mr-2 text-foreground-muted" />
              {duration > 0 ? `${duration} hari` : "-"}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
              Metode
            </label>
            <div className="relative">
              <select
                value={pickupMethod}
                onChange={(e) => onPickupMethodChange(e.target.value)}
                className="w-full h-10 pl-3 pr-10 text-sm bg-muted rounded-md outline-none ring-1 ring-border/50 focus:ring-foreground/20 transition-all duration-200 text-foreground appearance-none cursor-pointer"
              >
                <option value="pickup">Ambil di Toko</option>
                <option value="delivery">Diantar ke Rumah</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
