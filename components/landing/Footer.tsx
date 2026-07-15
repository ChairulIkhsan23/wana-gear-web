"use client"

import Link from "next/link"
import { ContainerContent } from "./Container"

const footerLinks = [
  {
    title: "Tentang",
    links: [
      { label: "Tentang Kami", href: "#" },
      { label: "Karir", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Kategori",
    links: [
      { label: "Hiking", href: "#" },
      { label: "Camping", href: "#" },
      { label: "Climbing", href: "#" },
      { label: "Trekking", href: "#" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Cara Sewa", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
  },
  {
    title: "Kontak",
    links: [
      { label: "cs@wanagear.com", href: "mailto:cs@wanagear.com" },
      { label: "+62 812 3456 7890", href: "tel:+6281234567890" },
    ],
  },
]

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted via-primary-light/10 to-muted border-t border-border/30">
      <ContainerContent as="div" className="py-0">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="text-lg font-bold text-foreground">WanaGear</span>
              <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                Platform rental perlengkapan outdoor terpercaya.
              </p>
              <div className="flex items-center gap-4 mt-5">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-xs font-medium text-foreground-muted hover:text-primary transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground-secondary hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground-muted border-t border-border/50">
          <p>&copy; {new Date().getFullYear()} WanaGear.</p>
          <p>Rental Peralatan Outdoor</p>
        </div>
      </ContainerContent>
    </footer>
  )
}
