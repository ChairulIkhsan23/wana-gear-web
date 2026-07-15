"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const routeLabels: Record<string, string> = {
  paket: "Paket",
  promo: "Promo",
  kategori: "Kategori",
  toko: "Toko",
  bantuan: "Bantuan",
  cart: "Keranjang",
  auth: "Akun",
}

interface BreadcrumbsProps {
  className?: string
}

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  const crumbs: { href: string; label: string; isLast: boolean }[] = []

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    const isLast = i === segments.length - 1

    if (segment === "kategori" && !isLast) continue

    const href = "/" + segments.slice(0, i + 1).join("/")

    const label = routeLabels[segment] || segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    crumbs.push({ href, label, isLast })
  }

  return (
    <nav className={cn("overflow-x-auto scrollbar-hide", className)} aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm w-max">
        <li>
          <Link href="/" className={cn("flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors", crumbs.length > 0 && "pr-1.5")}>
            <Home className="w-4 h-4" />
            {crumbs.length === 0 && <span className="font-medium">Beranda</span>}
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <ChevronRight className="w-4 h-4 text-foreground-muted flex-shrink-0" />
            <span className={cn(crumb.isLast ? "font-medium text-foreground" : "text-foreground-secondary")}>
              {crumb.label}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  )
}