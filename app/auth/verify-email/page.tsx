import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { SuccessState } from "@/features/auth/components/SuccessState"

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <SuccessState
        title="Email Berhasil Diverifikasi"
        message="Terima kasih telah memverifikasi email Anda. Sekarang Anda bisa menikmati semua fitur WanaGear."
      />
    </AuthLayout>
  )
}
