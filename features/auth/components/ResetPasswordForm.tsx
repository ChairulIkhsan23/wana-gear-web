"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import { PasswordInput } from "./PasswordInput"
import { useResetPassword } from "../hooks/useAuth"
import { resetPasswordSchema, type ResetPasswordFormData } from "../schemas"
import { SuccessState } from "./SuccessState"

export function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const resetPassword = useResetPassword()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: searchParams.get("email") || "",
      token: searchParams.get("token") || "",
    },
  })

  const onSubmit = (data: ResetPasswordFormData) => {
    resetPassword.mutate(data)
  }

  if (resetPassword.isSuccess) {
    return (
      <SuccessState
        title="Password Berhasil Diubah"
        message="Sekarang Anda bisa masuk menggunakan password baru."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Reset Password</h1>
        <p className="text-sm text-foreground-secondary mt-2">
          Masukkan password baru Anda.
        </p>
      </div>

      {resetPassword.isError && (
        <div className="p-3 text-sm text-danger bg-danger/5 rounded-xl border border-danger/20">
          Gagal mereset password. Link mungkin sudah kadaluarsa.
        </div>
      )}

      <PasswordInput
        label="Password Baru"
        placeholder="Minimal 6 karakter"
        {...register("password")}
        error={errors.password?.message}
      />

      <PasswordInput
        label="Konfirmasi Password Baru"
        placeholder="Ulangi password"
        {...register("password_confirmation")}
        error={errors.password_confirmation?.message}
      />

      <button
        type="submit"
        disabled={resetPassword.isPending}
        className="w-full h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {resetPassword.isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Memproses...
          </>
        ) : (
          "Reset Password"
        )}
      </button>
    </form>
  )
}
