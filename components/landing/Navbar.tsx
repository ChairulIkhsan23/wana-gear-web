"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ContainerContent } from "./Container"
import { cn } from "@/lib/utils"
import { navigation } from "@/constants/navigation"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-14 lg:top-16 z-40 bg-surface border-t border-border/50 overflow-x-auto scrollbar-hide">
      <ContainerContent as="div" className="py-0">
        <div className="flex items-center gap-1">
          {navigation.map((item) => {
            let isActive = false
            
            if (item.href === "/") {
              isActive = pathname === "/"
            } else if (item.href.startsWith("/category/")) {
              isActive = pathname === item.href
            } else {
              isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            }

            const isArtikel = item.href === "/artikel"
            const isPaketPromo = ["/paket", "/promo"].includes(item.href)

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "relative shrink-0 px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm transition-colors duration-200 whitespace-nowrap",
                  isActive
                    ? "text-primary font-medium"
                    : isArtikel
                      ? "text-green-600 hover:text-green-700 font-semibold"
                      : isPaketPromo
                        ? "text-red-600 hover:text-red-700 font-semibold"
                        : "text-foreground-secondary hover:text-foreground font-medium"
                )}
              >
                {item.title}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full",
                    isActive ? "w-4/5 bg-primary" : "w-0",
                    !isActive && (isArtikel ? "bg-green-600" : isPaketPromo ? "bg-red-600" : "bg-primary")
                  )}
                />
              </Link>
            )
          })}
        </div>
      </ContainerContent>
    </nav>
  )
}
