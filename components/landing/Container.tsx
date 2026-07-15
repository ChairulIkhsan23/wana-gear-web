import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer" | "nav"
}

export function ContainerPage({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16", className)}>
      {children}
    </Tag>
  )
}

export function ContainerContent({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-8", className)}>
      {children}
    </Tag>
  )
}
