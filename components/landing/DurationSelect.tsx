"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DurationSelectProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const durationOptions = [
  { value: "1", label: "1 Hari" },
  { value: "2", label: "2 Hari" },
  { value: "3", label: "3 Hari" },
  { value: "4", label: "4 Hari" },
  { value: "5", label: "5 Hari" },
  { value: "6", label: "6 Hari" },
  { value: "7", label: "7 Hari" },
  { value: "8", label: "Lebih dari 7 Hari" },
] as const

export function DurationSelect({ value, onChange, disabled }: DurationSelectProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor="duration" className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
        Durasi
      </label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id="duration">
          <SelectValue placeholder="Pilih Durasi" />
        </SelectTrigger>
        <SelectContent>
          {durationOptions.map(({ value, label }) => (
            <SelectItem key={value} value={value} className="focus:text-white">
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}