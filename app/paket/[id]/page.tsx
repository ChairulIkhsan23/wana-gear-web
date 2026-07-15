import { TopHeader } from "@/components/landing/TopHeader"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { PackageDetail } from "@/components/landing/PackageDetail"

interface Props {
  params: Promise<{ id: string }>
}

export default async function PaketDetailPage({ params }: Props) {
  const { id } = await params
  return (
    <>
      <TopHeader />
      <Navbar />
      <main>
        <PackageDetail packageId={id} />
      </main>
      <Footer />
    </>
  )
}