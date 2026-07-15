"use client"

import { forwardRef } from "react"
import { Car, Sofa, Wifi, Clock, type LucideIcon, type LucideProps } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { facilities } from "@/dummy/stores"
import { cn } from "@/lib/utils"

const Mosque = forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
  <svg ref={ref} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3Z" />
    <path d="M5 10h14v2H5z" />
    <path d="M3 22h18v-2H3z" />
    <path d="M8 14v4" />
    <path d="M16 14v4" />
    <circle cx="12" cy="7" r="1" />
  </svg>
))
Mosque.displayName = "Mosque"

const Toilet = forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
  <svg ref={ref} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16" />
    <path d="M6 6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M10 11v4" />
    <path d="M14 11v4" />
  </svg>
))
Toilet.displayName = "Toilet"

const CreditCardCustom = forwardRef<SVGSVGElement, LucideProps>((props, ref) => (
  <svg ref={ref} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
))
CreditCardCustom.displayName = "CreditCardCustom"

const customIconMap: Record<string, LucideIcon> = {
  Car, Sofa, Wifi, Mosque, Toilet,
  CreditCard: CreditCardCustom,
}

const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

function getCurrentDayName(): string {
  return dayNames[new Date().getDay()]
}

const hoursData = [
  { day: "Senin", open: "08:00", close: "20:00" },
  { day: "Selasa", open: "08:00", close: "20:00" },
  { day: "Rabu", open: "08:00", close: "20:00" },
  { day: "Kamis", open: "08:00", close: "20:00" },
  { day: "Jumat", open: "08:00", close: "20:00" },
  { day: "Sabtu", open: "09:00", close: "18:00" },
  { day: "Minggu", open: "09:00", close: "16:00" },
]

function isOpenNow(day: string, open: string, close: string): boolean {
  const now = new Date()
  const dayName = dayNames[now.getDay()]
  if (day !== dayName) return false

  const [oh, om] = open.split(":").map(Number)
  const [ch, cm] = close.split(":").map(Number)
  const openMin = oh * 60 + om
  const closeMin = ch * 60 + cm
  const nowMin = now.getHours() * 60 + now.getMinutes()

  return nowMin >= openMin && nowMin < closeMin
}

export function StoreInfo() {
  const today = getCurrentDayName()
  const todayHours = hoursData.find((h) => h.day === today)
  const isOpen = todayHours ? isOpenNow(todayHours.day, todayHours.open, todayHours.close) : false

  return (
    <section className="py-14 lg:py-18 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Informasi Toko</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            Nikmati kenyamanan berkunjung ke toko WanaGear.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Fasilitas Toko */}
          <AnimatedSection as="div" delay={0.05}>
            <h3 className="text-base font-semibold text-foreground mb-5">Fasilitas Toko</h3>
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {facilities.map((item) => {
                const Icon = customIconMap[item.icon]
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-2.5 p-4 bg-muted rounded-lg hover:bg-foreground/5 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-foreground text-white shrink-0">
                      {Icon && <Icon className="w-[18px] h-[18px]" />}
                    </div>
                    <span className="text-xs font-medium text-foreground-secondary text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Jam Operasional */}
          <AnimatedSection as="div" delay={0.1}>
            <h3 className="text-base font-semibold text-foreground mb-5">Jam Operasional</h3>
            <div className="bg-muted rounded-2xl border border-border/50 p-5 lg:p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">Jam Buka</span>
                </div>
                <span
                  className={cn(
                    "px-2.5 py-0.5 text-[11px] font-bold rounded-full",
                    isOpen
                      ? "bg-success/10 text-success"
                      : "bg-foreground-muted/10 text-foreground-muted"
                  )}
                >
                  {isOpen ? "Buka Sekarang" : "Tutup"}
                </span>
              </div>

              <div className="space-y-2">
                {hoursData.map((h) => {
                  const isToday = h.day === today
                  const open = isOpenNow(h.day, h.open, h.close)
                  return (
                    <div
                      key={h.day}
                      className={cn(
                        "flex items-center justify-between py-1.5 px-2.5 rounded-xl transition-colors",
                        isToday ? "bg-surface font-semibold" : ""
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm",
                          isToday ? "text-primary font-bold" : "text-foreground"
                        )}
                      >
                        {h.day}
                        {isToday && (
                          <span className="ml-1.5 text-[10px] text-success font-semibold">
                            {open ? "● Buka" : "● Tutup"}
                          </span>
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          isToday ? "text-primary font-bold" : "text-foreground-secondary"
                        )}
                      >
                        {h.open} - {h.close}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContainerContent>
    </section>
  )
}
