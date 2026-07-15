"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { articles } from "@/dummy/articles"
import { cn } from "@/lib/utils"

const categories = ["Semua", ...new Set(articles.map((a) => a.category.name))]

export function ArticleListing() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filtered = activeCategory === "Semua" ? articles : articles.filter((a) => a.category.name === activeCategory)

  return (
    <section className="py-10 lg:py-14 bg-surface">
      <ContainerContent>
        <Breadcrumbs className="pb-2" />
        <div className="mb-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">Artikel</h1>
          <p className="text-sm text-foreground-secondary mt-1">Artikel dan panduan seputar perlengkapan outdoor</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-xs lg:text-sm font-medium rounded-lg border transition-all",
                activeCategory === cat
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-border text-foreground-secondary hover:border-emerald-300 hover:text-emerald-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
            >
              <Link href={"/artikel/" + article.id} className="relative aspect-[16/9] overflow-hidden bg-muted shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 text-[11px] text-foreground-muted mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.published_at}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-widest mb-1.5">
                  {article.category.name}
                </span>
                <Link href={"/artikel/" + article.id}>
                  <h2 className="text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 mb-2">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-sm text-foreground-secondary leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
                <div className="mt-auto">
                  <Link
                    href={"/artikel/" + article.id}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:gap-2.5 transition-all duration-300"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContainerContent>
    </section>
  )
}
