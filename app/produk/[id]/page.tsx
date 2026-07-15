import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ProductDetail } from "@/components/landing/ProductDetail"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProdukDetailPage({ params }: Props) {
  const { id } = await params

  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <ProductDetail productId={id} />
      </main>
      <Footer />
    </>
  )
}

