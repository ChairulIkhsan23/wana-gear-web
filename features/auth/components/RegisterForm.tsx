"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Mail, User, Loader2 } from "lucide-react"
import { PasswordInput } from "./PasswordInput"
import { SocialLogin } from "./SocialLogin"
import { useRegister } from "../hooks/useAuth"
import { registerSchema, type RegisterFormData } from "../schemas"

export function RegisterForm() {
  const registerMut = useRegister()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormData) => {
    registerMut.mutate(data)
  }

  if (registerMut.isSuccess) {
    return (
      <div className="text-center py-8 space-y-4">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Pendaftaran Berhasil!</h1>
        <p className="text-sm text-foreground-secondary">Akun Anda telah dibuat. Selamat berpetualang!</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all"
        >
          Jelajahi Sekarang
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Daftar</h1>
        <p className="text-sm text-foreground-secondary mt-2">
          Buat akun baru untuk memulai petualangan.
        </p>
      </div>

      {registerMut.isError && (
        <div className="p-3 text-sm text-danger bg-danger/5 rounded-xl border border-danger/20">
          {registerMut.error?.message || "Pendaftaran gagal"}
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Nama Lengkap</label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted" />
          <input
            type="text"
            {...register("name")}
            placeholder="Nama lengkap"
            className="w-full h-11 pl-10 pr-4 text-sm bg-muted border border-border rounded-xl outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        {errors.name && <p className="text-xs text-danger">{errors.name.message}</p>}
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

      <PasswordInput
        label="Password"
        placeholder="Minimal 6 karakter"
        {...register("password")}
        error={errors.password?.message}
      />

      <PasswordInput
        label="Konfirmasi Password"
        placeholder="Ulangi password"
        {...register("password_confirmation")}
        error={errors.password_confirmation?.message}
      />

      <button
        type="submit"
        disabled={registerMut.isPending}
        className="w-full h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {registerMut.isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Memproses...
          </>
        ) : (
          "Daftar"
        )}
      </button>

      <SocialLogin />

      <p className="text-center text-sm text-foreground-secondary">
        Sudah punya akun?{" "}
        <Link href="/auth/login" className="font-semibold text-primary hover:text-primary-dark">
          Masuk
        </Link>
      </p>
    </form>
  )
}
