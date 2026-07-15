"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Mail, Loader2 } from "lucide-react"
import { PasswordInput } from "./PasswordInput"
import { SocialLogin } from "./SocialLogin"
import { useLogin } from "../hooks/useAuth"
import { loginSchema, type LoginFormData } from "../schemas"

export function LoginForm() {
  const login = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    login.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Masuk</h1>
        <p className="text-sm text-foreground-secondary mt-2">
          Selamat datang kembali! Masuk untuk melanjutkan.
        </p>
      </div>

      {login.isError && (
        <div className="p-3 text-sm text-danger bg-danger/5 rounded-xl border border-danger/20">
          {login.error?.message || "Email atau password salah"}
        </div>
      )}

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

      <div className="space-y-1.5">
        <PasswordInput
          label="Password"
          placeholder="Masukkan password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <div className="flex justify-end">
        <Link
          href="/auth/forgot-password"
          className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Lupa password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={login.isPending}
        className="w-full h-12 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {login.isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Memproses...
          </>
        ) : (
          "Masuk"
        )}
      </button>

      <SocialLogin />

      <p className="text-center text-sm text-foreground-secondary">
        Belum punya akun?{" "}
        <Link href="/auth/register" className="font-semibold text-primary hover:text-primary-dark">
          Daftar Sekarang
        </Link>
      </p>
    </form>
  )
}
