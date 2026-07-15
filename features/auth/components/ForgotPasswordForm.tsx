"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Mail, Loader2, ArrowLeft } from "lucide-react"
import { useForgotPassword } from "../hooks/useAuth"
import { forgotPasswordSchema, type ForgotPasswordFormData } from "../schemas"
import { SuccessState } from "./SuccessState"

export function ForgotPasswordForm() {
  const forgotPassword = useForgotPassword()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = (data: ForgotPasswordFormData) => {
    forgotPassword.mutate(data)
  }

  if (forgotPassword.isSuccess) {
    return (
      <SuccessState
        title="Email Terkirim"
        message={forgotPassword.data?.message || "Link reset password telah dikirim ke email Anda"}
      />
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Lupa Password</h1>
        <p className="text-sm text-foreground-secondary mt-2">
          Masukkan email Anda dan kami akan mengirimkan link untuk mereset password.
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Email</label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted" />
          <input
            type="email"
            {...register("email")}
            placeholder="nama@email.com"
            className="w-full h-11 pl-10 pr-4 text-sm bg-muted border border-border rounded-xl outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        {errors.email && <p className="text-xs text-danger">{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        disabled={forgotPassword.isPending}
        className="w-full h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {forgotPassword.isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          "Kirim Link Reset"
        )}
      </button>

      <Link
        href="/auth/login"
        className="flex items-center justify-center gap-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Login
      </Link>
    </form>
  )
}
