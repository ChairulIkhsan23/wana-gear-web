"use client"

import { LuArrowRight } from "react-icons/lu"
import { Button } from "@/components/ui/button"

interface AdventureButtonProps {
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function AdventureButton({ loading, disabled, onClick }: AdventureButtonProps) {
  return (
    <Button
      type="submit"
      size="default"
      className="w-full lg:w-auto"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      <span>Mulai Petualangan</span>
      <LuArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </Button>
  )
}