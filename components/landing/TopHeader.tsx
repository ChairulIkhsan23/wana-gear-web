"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, User, Store, HelpCircle, ShoppingBag, Menu, X, Heart } from "lucide-react"
import { ContainerContent } from "./Container"
import { cn } from "@/lib/utils"
import { SearchBar } from "@/components/search/SearchBar"
import { MobileSearch } from "@/components/search/MobileSearch"
import { CartBadge } from "@/components/cart/CartBadge"
import { UserMenu } from "@/components/landing/UserMenu"
import { useAuthStore } from "@/features/auth/store"

export function TopHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuAnimating, setMobileMenuAnimating] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const { isAuthenticated } = useAuthStore()

  const openMobileMenu = () => {
    setMobileMenuAnimating(true)
    setMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setMobileMenuAnimating(false)
    setTimeout(() => setMobileMenuOpen(false), 300)
  }

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-surface transition-shadow duration-300",
        scrolled ? "shadow-sm shadow-foreground/5" : "shadow-none"
      )}
    >
      <ContainerContent as="div" className="py-0">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <button
            type="button"
            className="flex lg:hidden items-center justify-center w-10 h-10 -ml-2 text-foreground-secondary hover:text-foreground"
            onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold tracking-tight text-primary">WanaGear</span>
          </Link>

          <div className="hidden lg:flex flex-1 max-w-md mx-6">
            <SearchBar />
          </div>

          <div className="flex items-center gap-1 lg:gap-2">
            <button
              type="button"
              className="flex lg:hidden items-center justify-center w-10 h-10 text-foreground-secondary hover:text-foreground"
              onClick={() => setMobileSearchOpen(true)}
              aria-label="Cari"
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <Link
                  href="/auth/login"
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 text-sm transition-colors rounded-lg",
                    isActive("/auth")
                      ? "text-primary bg-muted font-semibold"
                      : "text-foreground-secondary hover:text-foreground hover:bg-muted"
                  )}
                >
                  <User className="w-4 h-4" />
                  <span>Masuk</span>
                </Link>
              )}
            </div>

            <Link
              href="/toko"
              className={cn(
                "hidden lg:flex items-center gap-1.5 px-3 py-2 text-sm transition-colors rounded-lg",
                isActive("/toko")
                  ? "text-primary bg-muted font-semibold"
                  : "text-foreground-secondary hover:text-foreground hover:bg-muted"
              )}
            >
              <Store className="w-4 h-4" />
              <span>Toko Kami</span>
            </Link>

            <Link
              href="/bantuan"
              className={cn(
                "hidden lg:flex items-center gap-1.5 px-3 py-2 text-sm transition-colors rounded-lg",
                isActive("/bantuan")
                  ? "text-primary bg-muted font-semibold"
                  : "text-foreground-secondary hover:text-foreground hover:bg-muted"
              )}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Bantuan</span>
            </Link>

            <Link
              href="/wishlist"
              className={cn(
                "hidden lg:flex items-center justify-center w-10 h-10 transition-colors rounded-lg",
                isActive("/wishlist")
                  ? "text-primary bg-muted"
                  : "text-foreground-secondary hover:text-foreground hover:bg-muted"
              )}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>

            <Link
              href="/cart"
              className={cn(
                "relative flex items-center justify-center w-10 h-10 transition-colors rounded-lg",
                isActive("/cart")
                  ? "text-primary bg-muted"
                  : "text-foreground-secondary hover:text-foreground hover:bg-muted"
              )}
              aria-label="Keranjang"
            >
              <ShoppingBag className="w-5 h-5" />
              {isAuthenticated && (
                <CartBadge />
              )}
            </Link>
          </div>
        </div>

        <MobileSearch isOpen={mobileSearchOpen} onClose={() => setMobileSearchOpen(false)} />
      </ContainerContent>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            style={{ opacity: mobileMenuAnimating ? 1 : 0 }}
          />
          <div
            className="relative bg-surface w-72 h-full shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out"
            style={{ transform: mobileMenuAnimating ? 'translateX(0)' : 'translateX(-100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between h-14 px-4 border-b border-border/50">
              <span className="text-lg font-bold tracking-tight text-primary">Menu</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-8 h-8 text-foreground-secondary hover:text-foreground"
                aria-label="Tutup menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4 flex flex-col gap-1">
              <Link
                href="/auth/login"
                className={cn(
                  "px-3 py-2.5 text-sm rounded-lg transition-colors",
                  isActive("/auth")
                    ? "text-primary bg-muted font-semibold"
                    : "text-foreground-secondary hover:text-foreground hover:bg-muted"
                )}
                onClick={closeMobileMenu}
              >
                Masuk
              </Link>
              <Link
                href="/toko"
                className={cn(
                  "px-3 py-2.5 text-sm rounded-lg transition-colors",
                  isActive("/toko")
                    ? "text-primary bg-muted font-semibold"
                    : "text-foreground-secondary hover:text-foreground hover:bg-muted"
                )}
                onClick={closeMobileMenu}
              >
                Toko Kami
              </Link>
              <Link
                href="/bantuan"
                className={cn(
                  "px-3 py-2.5 text-sm rounded-lg transition-colors",
                  isActive("/bantuan")
                    ? "text-primary bg-muted font-semibold"
                    : "text-foreground-secondary hover:text-foreground hover:bg-muted"
                )}
                onClick={closeMobileMenu}
              >
                Bantuan
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
