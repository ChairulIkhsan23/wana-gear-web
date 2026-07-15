import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-lg border bg-surface px-4 text-sm text-foreground placeholder:text-foreground-muted transition-all duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
          error
            ? "border-danger focus-visible:outline-danger"
            : "border-border hover:border-foreground-muted",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, type InputProps }
