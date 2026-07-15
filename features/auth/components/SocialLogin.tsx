import { Chrome } from "lucide-react"

export function SocialLogin() {
  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-surface px-4 text-foreground-muted">Atau masuk dengan</span>
        </div>
      </div>
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 h-11 text-sm font-medium border border-border rounded-xl hover:bg-muted transition-colors"
      >
        <Chrome className="w-4 h-4" />
        Google
      </button>
    </div>
  )
}
