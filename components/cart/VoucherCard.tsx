"use client"

import { useState } from "react"
import { Tag } from "lucide-react"

interface VoucherCardProps {
  onApply: (code: string) => void
  applied: boolean
}

export function VoucherCard({ onApply, applied }: VoucherCardProps) {
  const [code, setCode] = useState("")

  return (
    <div className="bg-surface rounded-lg p-5">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-foreground-muted" />
        <h3 className="text-sm font-semibold text-foreground">Voucher</h3>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Masukkan kode voucher"
          className="flex-1 h-10 px-3 text-sm bg-muted rounded-md outline-none ring-1 ring-border/50 focus:ring-foreground/20 transition-all duration-200 text-foreground placeholder:text-foreground-muted"
          disabled={applied}
        />
        <button
          type="button"
          onClick={() => onApply(code)}
          disabled={!code || applied}
          className="h-10 px-4 text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 rounded-md transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {applied ? "Terpakai" : "Gunakan"}
        </button>
      </div>
      {applied && (
        <p className="text-xs text-success mt-2">Voucher berhasil diterapkan</p>
      )}
    </div>
  )
}
