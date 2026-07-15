"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PeopleSelectProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const peopleOptions = [
  { value: "1", label: "1 Orang" },
  { value: "2", label: "2 Orang" },
  { value: "3", label: "3 Orang" },
  { value: "4", label: "4 Orang" },
  { value: "5", label: "5 Orang" },
  { value: "6", label: "6 Orang" },
  { value: "7", label: "7 Orang" },
  { value: "8", label: "8+ Orang" },
] as const

export function PeopleSelect({ value, onChange, disabled }: PeopleSelectProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor="people" className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
        Jumlah Peserta
      </label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id="people">
          <SelectValue placeholder="Pilih Jumlah Peserta" />
        </SelectTrigger>
        <SelectContent>
          {peopleOptions.map(({ value, label }) => (
            <SelectItem key={value} value={value} className="focus:text-white">
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}