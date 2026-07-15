"use client"

import { ContainerContent } from "@/components/landing/Container"
import { CheckoutForm } from "@/features/checkout/components/CheckoutForm"

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-surface py-8 lg:py-12">
      <ContainerContent className="max-w-3xl">
        <h1 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-8">Checkout</h1>
        <CheckoutForm />
      </ContainerContent>
    </main>
  )
}
