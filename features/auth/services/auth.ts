import type { User } from "../types"

const dummyUsers: User[] = [
  { id: 1, name: "Demo User", email: "demo@wanagear.com", email_verified_at: new Date().toISOString() },
]

export const authService = {
  login: async (_email: string, _password: string): Promise<{ user: User; token: string }> => {
    await new Promise((r) => setTimeout(r, 800))
    return { user: dummyUsers[0], token: "dummy-token-" + Date.now() }
  },

  register: async (data: { name: string; email: string; password: string }): Promise<{ user: User; token: string }> => {
    await new Promise((r) => setTimeout(r, 800))
    const user: User = { id: Date.now(), name: data.name, email: data.email, email_verified_at: new Date().toISOString() }
    return { user, token: "dummy-token-" + Date.now() }
  },

  logout: async (): Promise<void> => {
    await new Promise((r) => setTimeout(r, 300))
  },

  forgotPassword: async (_email: string): Promise<{ message: string }> => {
    await new Promise((r) => setTimeout(r, 800))
    return { message: "Link reset password telah dikirim ke email Anda" }
  },

  resetPassword: async (_data: { email: string; token: string; password: string }): Promise<{ message: string }> => {
    await new Promise((r) => setTimeout(r, 800))
    return { message: "Password berhasil direset" }
  },

  getProfile: async (): Promise<User> => {
    await new Promise((r) => setTimeout(r, 300))
    return dummyUsers[0]
  },
}
