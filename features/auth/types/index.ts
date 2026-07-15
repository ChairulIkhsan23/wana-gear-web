export interface User {
  id: number
  name: string
  email: string
  email_verified_at?: string
  phone?: string
  avatar?: string
  role?: string
  created_at?: string
  updated_at?: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface ForgotPasswordFormData {
  email: string
}

export interface ResetPasswordFormData {
  email: string
  token: string
  password: string
  password_confirmation: string
}
