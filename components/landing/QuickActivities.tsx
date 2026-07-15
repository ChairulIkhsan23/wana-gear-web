"use client"

import { Button } from "@/components/ui/button"
import { LuTent, LuMountain, LuCookingPot, LuBackpack } from "react-icons/lu"

interface QuickActivitiesProps {
  selectedActivity: string
  onSelectActivity: (value: string) => void
  disabled?: boolean
}

const quickActivities = [
  { value: "camping", label: "Camping", icon: LuTent },
  { value: "hiking", label: "Hiking", icon: LuMountain },
  { value: "cooking", label: "Cooking", icon: LuCookingPot },
  { value: "accessories", label: "Accessories", icon: LuBackpack },
] as const

export function QuickActivities({ selectedActivity, onSelectActivity, disabled }: QuickActivitiesProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-foreground-secondary uppercase tracking-wider">Quick Activity</p>
      <div className="flex flex-wrap gap-2">
        {quickActivities.map(({ value, label, icon: Icon }) => (
          <Button
            key={value}
            type="button"
            variant={selectedActivity === value ? "default" : "outline"}
            size="sm"
            onClick={() => !disabled && onSelectActivity(value)}
            disabled={disabled}
            className="gap-1.5 h-9 px-3 transition-all duration-200"
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-xs font-medium">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}