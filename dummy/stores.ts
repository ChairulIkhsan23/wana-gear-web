export const services: Record<string, unknown>[] = [
  { id: 1, icon: "Truck", title: "Gratis Ongkir", description: "Jabodetabek minimal 3 hari sewa" },
  { id: 2, icon: "Shield", title: "Garansi Penuh", description: "Asuransi kerusakan & kehilangan" },
  { id: 3, icon: "RotateCcw", title: "Bebas Tukar", description: "Ganti barang jika tidak sesuai" },
  { id: 4, icon: "UserCheck", title: "Siap Pakai", description: "Barang sudah dicek & dibersihkan" },
  { id: 5, icon: "Headset", title: "Dukungan 24/7", description: "Bantuan admin kapanpun dibutuhkan" },
]

export const facilities: Record<string, unknown>[] = [
  { id: 1, icon: "Wifi", label: "WiFi Gratis" },
  { id: 2, icon: "Car", label: "Parkir Luas" },
  { id: 3, icon: "Sofa", label: "Ruang Tunggu" },
  { id: 4, icon: "Mosque", label: "Mushola" },
  { id: 5, icon: "Toilet", label: "Toilet Bersih" },
  { id: 6, icon: "CreditCard", label: "Multi Payment" },
]

export const stores = [
  { id: 1, name: "WanaGear Bandung", address: "Jl. Merdeka No. 123, Bandung", lat: -6.9175, lng: 107.6191, hours: [{ day: "Senin-Minggu", open: "08:00", close: "20:00" }], phone: "022-12345678", email: "bandung@wanagear.com", image: "https://picsum.photos/seed/toko1/400/300" },
  { id: 2, name: "WanaGear Jakarta", address: "Jl. Sudirman No. 45, Jakarta", lat: -6.2146, lng: 106.8451, hours: [{ day: "Senin-Minggu", open: "09:00", close: "21:00" }], phone: "021-87654321", email: "jakarta@wanagear.com", image: "https://picsum.photos/seed/toko2/400/300" },
]

export const faqs: Record<string, unknown>[] = [
  { q: "Bagaimana cara menyewa?", a: "Pilih barang, tentukan durasi, lakukan pembayaran, dan barang akan dikirim." },
  { q: "Berapa minimal durasi sewa?", a: "Minimal sewa adalah 1 hari." },
  { q: "Apakah bisa perpanjang sewa?", a: "Bisa, hubungi kami minimal H-1 sebelum masa sewa berakhir." },
]
