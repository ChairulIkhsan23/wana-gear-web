"use client"

import { Clock } from "lucide-react"
import { ContainerContent } from "@/components/landing/Container"
import { AnimatedSection } from "@/components/landing/AnimatedSection"
import { cn } from "@/lib/utils"

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

export function OperatingHours() {
  const today = getCurrentDayName()
  const todayHours = hoursData.find((h) => h.day === today)
  const isOpen = todayHours ? isOpenNow(todayHours.day, todayHours.open, todayHours.close) : false

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <ContainerContent>
        <AnimatedSection as="div">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Jam Operasional</h2>
          <p className="text-sm text-foreground-secondary mb-8">
            WanaGear siap melayani kamu setiap hari.
          </p>
        </AnimatedSection>

        <AnimatedSection as="div" delay={0.1}>
          <div className="max-w-lg mx-auto bg-surface rounded-2xl border border-border/50 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Jam Buka</span>
              </div>
              <span
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-full",
                  isOpen
                    ? "bg-success/10 text-success"
                    : "bg-foreground-muted/10 text-foreground-muted"
                )}
              >
                {isOpen ? "Buka Sekarang" : "Tutup"}
              </span>
            </div>

            <div className="space-y-3">
              {hoursData.map((h) => {
                const isToday = h.day === today
                const open = isOpenNow(h.day, h.open, h.close)
                return (
                  <div
                    key={h.day}
                    className={cn(
                      "flex items-center justify-between py-2 px-3 rounded-xl transition-colors",
                      isToday ? "bg-primary-light font-semibold" : ""
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
                        <span className="ml-2 text-[10px] text-success font-semibold">
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
      </ContainerContent>
    </section>
  )
}
