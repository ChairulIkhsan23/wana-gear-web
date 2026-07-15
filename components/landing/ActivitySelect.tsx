"use client"

import { LuTent, LuMountain, LuCookingPot, LuBackpack } from "react-icons/lu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ActivitySelectProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const activities = [
  { id: "camping", label: "Camping", icon: LuTent },
  { id: "hiking", label: "Hiking", icon: LuMountain },
  { id: "cooking", label: "Cooking", icon: LuCookingPot },
  { id: "accessories", label: "Accessories", icon: LuBackpack },
] as const

export function ActivitySelect({ value, onChange, disabled }: ActivitySelectProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor="activity" className="block text-[11px] font-semibold text-foreground-secondary uppercase tracking-widest">
        Aktivitas
      </label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id="activity">
          <SelectValue placeholder="Pilih Aktivitas" />
        </SelectTrigger>
        <SelectContent>
          {activities.map(({ id, label, icon: Icon }) => (
            <SelectItem key={id} value={id} className="focus:text-white">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}