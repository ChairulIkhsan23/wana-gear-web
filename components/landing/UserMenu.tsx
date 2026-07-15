"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { User, ChevronDown, LogOut, Settings, Package } from "lucide-react"
import { useAuthStore } from "@/features/auth/store"
import { useLogout } from "@/features/auth/hooks/useAuth"

export function UserMenu() {
  const { user } = useAuthStore()
  const { mutate: logout } = useLogout()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-muted"
      >
        <User className="w-4 h-4" />
        <span className="hidden sm:inline-block max-w-[100px] truncate">
          {user?.name || "Akun"}
        </span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-surface rounded-xl shadow-xl border border-border overflow-hidden z-50">
          <div className="p-3 border-b border-border bg-muted/30">
            <p className="text-sm font-semibold text-foreground truncate">{user?.name}</p>
            <p className="text-xs text-foreground-secondary truncate">{user?.email}</p>
          </div>
          <div className="p-1">
            <Link
              href="/profil"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span>Pengaturan Profil</span>
            </Link>
            <Link
              href="/pesanan"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground-secondary hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              <Package className="w-4 h-4" />
              <span>Pesanan Saya</span>
            </Link>
          </div>
          <div className="p-1 border-t border-border">
            <button
              onClick={() => {
                setIsOpen(false)
                logout()
              }}
              className="flex items-center w-full gap-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
