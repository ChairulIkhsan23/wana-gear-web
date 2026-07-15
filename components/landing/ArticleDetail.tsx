"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Clock, Calendar, User, MessageSquare, Send } from "lucide-react"
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { ContainerContent } from "./Container"
import { Breadcrumbs } from "./Breadcrumbs"
import { articles } from "@/dummy/articles"

const comments = [
  {
    id: 1,
    author: "Budi Santoso",
    avatar: "https://picsum.photos/seed/user1/40/40",
    date: "2 jam yang lalu",
    content: "Artikel yang sangat berguna! Saya baru beli carrier baru dan bingung cara packing yang benar. Thanks untuk tipsnya!",
    likes: 12,
  },
  {
    id: 2,
    author: "Siti Rahayu",
    avatar: "https://picsum.photos/seed/user2/40/40",
    date: "5 jam yang lalu",
    content: "Bisa request artikel tentang perawatan sepatu hiking yang bagus? Sepatu saya cepat rusak kena air.",
    likes: 8,
  },
  {
    id: 3,
    author: "Andi Pratama",
    avatar: "https://picsum.photos/seed/user3/40/40",
    date: "1 hari yang lalu",
    content: "Mantap! Saya ikutin tips packing ini kemarin naik Gunung Gede, carrier jadi lebih nyaman dan seimbang.",
    likes: 15,
  },
]

export function ArticleDetail({ articleId }: { articleId: string }) {
  const [commentText, setCommentText] = useState("")
  const article = articles.find((a) => String(a.id) === articleId)
  if (!article) return null

  const otherArticles = articles.filter((a) => String(a.id) !== articleId).slice(0, 4)

  return (
    <section className="py-8 lg:py-10 bg-surface">
      <ContainerContent>
        <Breadcrumbs className="py-2" />
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
<header className="mb-8">
              <Link
                href="/artikel"
                className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Artikel
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex px-3 py-1 text-[11px] font-bold uppercase tracking-widest bg-emerald-600 text-white rounded">
                  {article.category.name}
                </span>
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
                {article.title}
              </h1>
            </header>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-muted">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-foreground-muted mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.published_at}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {article.author}
              </span>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <div className="whitespace-pre-wrap leading-relaxed">
                {article.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-6 text-foreground-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <footer className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground">Bagikan:</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-muted transition-colors"
                      aria-label="Bagikan ke Facebook"
                    >
                      <FaFacebookF className="w-4 h-4 text-blue-600" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-muted transition-colors"
                      aria-label="Bagikan ke Twitter"
                    >
                      <FaTwitter className="w-4 h-4 text-sky-500" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-muted transition-colors"
                      aria-label="Bagikan ke WhatsApp"
                    >
                      <FaWhatsapp className="w-4 h-4 text-green-500" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-muted transition-colors"
                      aria-label="Bagikan ke Instagram"
                    >
                      <FaInstagram className="w-4 h-4 text-pink-600" />
                    </button>
                    <Share2 className="w-4 h-4 text-foreground-secondary" />
                  </div>
                </div>
              </div>
            </footer>

            {/* Comments Section */}
            <section className="mt-16 pt-8 border-t border-border/50">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Komentar ({comments.length})
              </h2>

              {/* Add Comment */}
              <div className="mb-8 p-4 bg-muted/50 rounded-xl">
                <Image
                  src="https://picsum.photos/seed/current-user/40/40"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full mb-3"
                />
                <div className="flex gap-3">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Tulis komentar Anda..."
                    rows={3}
                    className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                  <button
                    type="button"
                    disabled={!commentText.trim()}
                    className="self-end px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Image
                      src={comment.avatar}
                      alt={comment.author}
                      width={40}
                      height={40}
                      className="rounded-full shrink-0 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">{comment.author}</span>
                        <span className="text-sm text-foreground-muted">{comment.date}</span>
                      </div>
                      <p className="text-sm text-foreground-secondary mb-2">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="flex items-center gap-1 text-sm text-foreground-secondary hover:text-emerald-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>{comment.likes}</span>
                        </button>
                        <button
                          type="button"
                          className="text-sm text-foreground-secondary hover:text-emerald-600 transition-colors"
                        >
                          Balas
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar - Recommended Articles */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-4">Artikel Terkait</h3>
                <div className="space-y-4">
                  {otherArticles.map((rec) => (
                    <Link
                      key={rec.id}
                      href={"/artikel/" + rec.id}
                      className="flex gap-3 group hover:gap-4 transition-gap"
                    >
                      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={rec.image}
                          alt={rec.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
                          {rec.category.name}
                        </span>
                        <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-emerald-600 transition-colors mt-1 mb-1">
                          {rec.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-foreground-muted">
                          <Clock className="w-3 h-3" />
                          {rec.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-emerald-600 rounded-xl p-5 text-white">
                <h3 className="font-bold text-lg mb-2">Dapatkan Tips Terbaru</h3>
                <p className="text-sm text-white/80 mb-4">Jangan lewatkan artikel & tips outdoor terbaru dari WanaGear</p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-2 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-emerald-600 rounded-lg font-medium text-sm hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    Langganan
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </ContainerContent>
    </section>
  )
}