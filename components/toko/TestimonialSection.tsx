"use client";

import { ContainerContent } from "@/components/landing/Container";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  origin: string;
  comment: string;
  rating: number;
}

const dummyTestimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    origin: "Bandung",
    comment: "Pengalaman berbelanja di WanaGear sangat menyenangkan, produk berkualitas dan pelayanan cepat!",
    rating: 5,
  },
  {
    name: "Siti Rahma",
    origin: "Yogyakarta",
    comment: "Saya suka koleksi tas gunung mereka, sangat awet dan stylish.",
    rating: 5,
  },
  {
    name: "Andi Putra",
    origin: "Jakarta",
    comment: "Customer service ramah, membantu saya memilih perlengkapan yang tepat.",
    rating: 4,
  },
  {
    name: "Dewi Lestari",
    origin: "Surabaya",
    comment: "Sewa tenda di sini murah dan barang bagus, cocok untuk pendakian pemula.",
    rating: 5,
  },
  {
    name: "Rizki Maulana",
    origin: "Medan",
    comment: "Proses pickup dan return sangat mudah, staffnya helpful banget.",
    rating: 4,
  },
  {
    name: "Maya Sari",
    origin: "Makassar",
    comment: "Lengkap sekali perlengkapannya, dari sepatu gunung sampai kompor portable.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <ContainerContent>
        <AnimatedSection as="div">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-lg text-foreground-secondary">
              Ribuan pendaki telah mempercayai WanaGear untuk petualangan mereka.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dummyTestimonials.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "bg-white rounded-xl p-6 flex flex-col h-full",
                  "shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300"
                )}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={cn(
                        "w-4 h-4",
                        idx < t.rating ? "fill-yellow-400 text-yellow-400" : "text-foreground-muted/30"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground-secondary flex-grow mb-4 leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground-muted">{t.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </ContainerContent>
    </section>
  );
}