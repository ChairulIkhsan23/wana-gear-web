/* eslint-disable @typescript-eslint/no-explicit-any */
export const profileService = {
  getProfile: async () => {
    await new Promise((r) => setTimeout(r, 200))
    return { data: { id: 1, name: "Demo User", email: "demo@wanagear.com", phone: "08123456789" } }
  },

  updateProfile: async (payload: any) => {
    await new Promise((r) => setTimeout(r, 500))
    return { data: { ...payload, id: 1 } }
  },
}

