import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "../store"
import { authService } from "../services/auth"
import type { LoginFormData, RegisterFormData, ForgotPasswordFormData, ResetPasswordFormData } from "../schemas"

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth)
  return useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data.email, data.password),
    onSuccess: (res) => setAuth(res.user, res.token),
  })
}

export function useRegister() {
  const setAuth = useAuthStore((s) => s.setAuth)
  return useMutation({
    mutationFn: (data: RegisterFormData) => authService.register(data),
    onSuccess: (res) => setAuth(res.user, res.token),
  })
}

export function useLogout() {
  const logout = useAuthStore((s) => s.logout)
  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => logout(),
  })
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: ForgotPasswordFormData) => authService.forgotPassword(data.email),
  })
}

export function useResetPassword() {
  return useMutation({
    mutationFn: (data: ResetPasswordFormData) => authService.resetPassword(data),
  })
}
