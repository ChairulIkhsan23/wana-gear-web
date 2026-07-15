export const packages = [
  {
    id: 1,
    name: "Paket Camping Hemat",
    description: "Tenda 2P + Sleeping bag + Matras + Kompor portable. Cocok untuk pemula.",
    price: 100000,
    original_price: 130000,
    duration: "3 hari 2 malam",
    items: ["Tenda Eiger Mountain 2P", "Sleeping Bag Polar", "Matras Lipat", "Kompor Portable"],
    isPopular: true,
    discount: 23,
    image: "https://picsum.photos/seed/paket1/600/340",
  },
  {
    id: 2,
    name: "Paket Pendaki Lengkap",
    description: "Carrier 60L + Tenda 2P + Sleeping Bag + Matras + Kompor + Headlamp.",
    price: 150000,
    original_price: 190000,
    duration: "3 hari 2 malam",
    items: ["Carrier Consina 60L", "Tenda Eiger Mountain 2P", "Sleeping Bag Polar", "Matras Lipat", "Kompor Portable", "Headlamp LED"],
    isPopular: false,
    discount: 21,
    image: "https://picsum.photos/seed/paket2/600/340",
  },
  {
    id: 3,
    name: "Paket Grup 4 Orang",
    description: "Tenda 4P + 4 Sleeping bag + 4 Matras + 2 Kompor + 4 Headlamp.",
    price: 350000,
    original_price: 450000,
    duration: "3 hari 2 malam",
    items: ["Tenda Consina Dome 4P", "4x Sleeping Bag Polar", "4x Matras Lipat", "2x Kompor Portable", "4x Headlamp LED"],
    isPopular: true,
    discount: 22,
    image: "https://picsum.photos/seed/paket3/600/340",
  },
]

export const rentalPackages = packages

export const addons = [
  { id: 1, name: "Trekking Pole", price: 10000, description: "Tongkat pendakian" },
  { id: 2, name: "Rain Cover Carrier", price: 5000, description: "Pelindung hujan carrier" },
  { id: 3, name: "Gaiter", price: 8000, description: "Penghalang pasir/air" },
]

export const benefits = [
  { icon: "Truck", title: "Gratis Ongkir", description: "Jabodetabek min 3 hari" },
  { icon: "Shield", title: "Garansi", description: "Asuransi full cover" },
  { icon: "RotateCcw", title: "Bebas Tukar", description: "Ganti barang sewaktu" },
  { icon: "UserCheck", title: "Siap Pakai", description: "Barang dicek & bersih" },
]
