import { CheckCircle } from "lucide-react"

interface SuccessStateProps {
  title: string
  message: string
}

export function SuccessState({ title, message }: SuccessStateProps) {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-5">
        <CheckCircle className="w-8 h-8 text-success" />
      </div>
      <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-sm text-foreground-secondary">{message}</p>
    </div>
  )
}
