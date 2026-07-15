"use client";

import Link from "next/link";
import { ContainerContent } from "@/components/landing/Container";
import { MessageCircle, Phone } from "lucide-react";

export function HelpCTA() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <ContainerContent>
        <div className="relative overflow-hidden rounded-3xl bg-foreground">
          <div
            className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/50" />
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Masih Membutuhkan Bantuan?
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Tim Customer Service kami siap membantu kebutuhan penyewaan perlengkapan outdoor.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </Link>
                <Link
                  href="tel:+6281234567890"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </section>
  );
}