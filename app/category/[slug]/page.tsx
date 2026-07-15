import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { CategoryPage } from "@/components/landing/CategoryPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CategoryRoutePage({ params }: Props) {
  const { slug } = await params

  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <CategoryPage slug={slug} />
      </main>
      <Footer />
    </>
  )
}
