import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ArticleDetail } from "@/components/landing/ArticleDetail"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { id } = await params
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <ArticleDetail articleId={id} />
      </main>
      <Footer />
    </>
  )
}