export const faqCategories = [
  {
    id: "rental",
    title: "Penyewaan",
    items: [
      { q: "Bagaimana cara menyewa perlengkapan?", a: "Pilih barang yang kamu butuhkan, tentukan tanggal sewa, lakukan pembayaran, dan barang akan kami kirimkan ke alamatmu." },
      { q: "Berapa minimal durasi sewa?", a: "Minimal durasi sewa adalah 1 hari. Untuk pemakaian lebih lama, kamu bisa memilih paket hemat kami." },
      { q: "Apakah bisa memperpanjang masa sewa?", a: "Bisa! Hubungi kami minimal H-1 sebelum masa sewa berakhir untuk perpanjangan." },
    ],
  },
  {
    id: "pembayaran",
    title: "Pembayaran",
    items: [
      { q: "Metode pembayaran apa saja yang tersedia?", a: "Kami menerima transfer bank (BCA, Mandiri, BRI), GoPay, OVO, dan DANA." },
      { q: "Apakah perlu membayar deposit?", a: "Ya, kami mengenakan deposit sebesar 30% dari total harga sewa sebagai jaminan." },
    ],
  },
  {
    id: "pengiriman",
    title: "Pengiriman & Pengembalian",
    items: [
      { q: "Apakah ada layanan antar-jemput?", a: "Ya, kami menyediakan layanan antar-jemput gratis untuk area Jabodetabek dengan minimal sewa 3 hari." },
      { q: "Bagaimana prosedur pengembalian?", a: "Barang dikembalikan di hari terakhir sewa. Tim kami akan menjemput atau kamu bisa antar ke toko." },
    ],
  },
]

export const faqs = faqCategories.flatMap((cat) => cat.items.map((item) => ({ ...item, category: cat.title })))

export const tips = [
  { image: "https://picsum.photos/seed/tip1/288/144", title: "Cek kondisi barang sebelum sewa", tag: "Tips", description: "Pastikan semua barang dalam kondisi baik saat diterima." },
  { image: "https://picsum.photos/seed/tip2/288/144", title: "Baca panduan penggunaan", tag: "Panduan", description: "Setiap barang dilengkapi panduan singkat cara pakai." },
  { image: "https://picsum.photos/seed/tip3/288/144", title: "Kembalikan tepat waktu", tag: "Info", description: "Hindari denda keterlambatan dengan mengembalikan tepat waktu." },
]
