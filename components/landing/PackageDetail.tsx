"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Truck, Shield, RotateCcw, UserCheck } from "lucide-react"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { rentalPackages } from "@/dummy/packages"

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n)

export function PackageDetail({ packageId }: { packageId: string }) {
  const pkg = rentalPackages.find((p) => String(p.id) === packageId) || null

  if (!pkg) return null

  return (
    <section className="py-8 lg:py-10 bg-surface">
      <ContainerContent>
        <Breadcrumbs />
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight py-2">{pkg.name}</h1>
          <p className="text-sm text-foreground-secondary mt-1">{pkg.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-muted">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            <div className="bg-white rounded-xl border border-border/50 p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Yang Termasuk dalam Paket</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Check className="w-5 h-5 text-foreground shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border/50 p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Detail Paket</h2>
              <dl className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-sm text-foreground-secondary">Total Item</dt>
                  <dd className="text-sm font-medium text-foreground">{pkg.items.length} barang</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-sm text-foreground-secondary">Harga Normal</dt>
                  <dd className="text-sm font-medium text-foreground-muted line-through">{rupiah(pkg.original_price)}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-sm text-foreground-secondary">Diskon</dt>
                  <dd className="text-sm font-medium text-red-600">{pkg.discount}%</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <dt className="text-sm text-foreground-secondary">Harga Paket</dt>
                  <dd className="text-sm font-bold text-foreground">{rupiah(pkg.price)}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-sm text-foreground-secondary">Total Hemat</dt>
                  <dd className="text-sm font-bold text-green-600">{rupiah(pkg.original_price - pkg.price)}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-xl border border-border/50 p-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">{rupiah(pkg.price)}</span>
                  <span className="text-sm text-foreground-muted line-through">{rupiah(pkg.original_price)}</span>
                </div>
                <p className="text-sm text-green-600 font-medium">Hemat {rupiah(pkg.original_price - pkg.price)} ({pkg.discount}%)</p>
                <p className="text-xs text-foreground-secondary">/hari sewa</p>

                {pkg.isPopular && (
                  <div className="bg-foreground/5 border border-foreground/20 rounded-lg px-3 py-2 text-center">
                    <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider">Paling Populer</span>
                  </div>
                )}

                <Link
                  href="#"
                  className="block w-full text-center py-3 bg-foreground text-white font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  Sewa Sekarang
                </Link>
                <Link
                  href="/paket"
                  className="block w-full text-center py-3 border border-border/50 text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
                >
                  Bandingkan Paket Lain
                </Link>
              </div>

              <div className="bg-white rounded-xl border border-border/50 p-6 space-y-4">
                <h3 className="text-sm font-bold text-foreground">Keuntungan Sewa</h3>
                <div className="space-y-3">
                  {[
                    { icon: Truck, label: "Gratis Antar-Jemput", desc: "Area Jabodetabek min. 3 hari" },
                    { icon: Shield, label: "Garansi Kerusakan", desc: "Asuransi full cover termasuk" },
                    { icon: RotateCcw, label: "Bebas Tukar Paket", desc: "Bisa ganti paket tengah jalan" },
                    { icon: UserCheck, label: "Siap Pakai", desc: "Barang dicek & dibersihkan" },
                  ].map(({ icon: Icon, label, desc }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{label}</p>
                        <p className="text-xs text-foreground-secondary">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </section>
  )
}