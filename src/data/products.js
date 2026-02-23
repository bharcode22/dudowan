import Fully_Washed from '../assets/images/products/fully-wash.jpeg';
import Honey from '../assets/images/products/honey.jpeg';
import Natural_Ulian from '../assets/images/products/natural.jpeg';
import Anaerobic_Honey from '../assets/images/products/anaerob-honey.jpeg';
import Anaerobic_Natural from '../assets/images/products/anaerob-natural.jpeg';

export const products = [
  {
    id: 1,
    name: "Fully Washed",
    origin: "Ulian",
    roastLevel: "Medium",
    price: 85000,
    weight: "250g",
    description:
      "Diproses dengan metode fully washed. Cherry kopi merah dipetik selektif, dikupas menggunakan pulper, difermentasi selama 1 hari, lalu dicuci hingga bersih. Pengeringan dilakukan selama 7–15 hari hingga kadar air 11–12%, dilanjutkan dengan hulling dan sortir manual.",
    flavorNotes: ["Chocolate", "Herbal", "Clean"],
    brewMethods: ["V60", "Kalita", "French Press"],
    grind: "Medium",
    image: Fully_Washed,
    stock: 15
  },
  {
    id: 2,
    name: "Honey Process",
    origin: "Ulian",
    roastLevel: "Light to Medium",
    price: 95000,
    weight: "250g",
    description:
      "Cherry merah difermentasi selama 3 hari, kemudian dikupas sebagian sehingga menyisakan mucilage. Proses penjemuran berlangsung selama 15–20 hari hingga kadar air 11–12%, lalu melalui proses hulling dan sortir manual.",
    flavorNotes: ["Citrus", "Honey", "Brown Sugar"],
    brewMethods: ["V60", "Aeropress", "Kalita"],
    grind: "Medium",
    image: Honey,
    stock: 10
  },
  {
    id: 3,
    name: "Natural Ulian",
    origin: "Ulian",
    roastLevel: "Medium",
    price: 105000,
    weight: "250g",
    description:
      "Diproses secara natural dengan menjemur cherry utuh selama 20–30 hari hingga kadar air mencapai 11–12%. Proses ini menghasilkan karakter rasa yang kompleks dan body yang lebih tebal, diakhiri dengan hulling dan sortir manual.",
    flavorNotes: ["Dark Chocolate", "Dried Fruit", "Spice"],
    brewMethods: ["French Press", "Tubruk", "V60"],
    grind: "Medium-Coarse",
    image: Natural_Ulian,
    stock: 8
  },
  {
    id: 4,
    name: "Anaerobic Honey",
    origin: "Ulian",
    roastLevel: "Medium",
    price: 110000,
    weight: "250g",
    description:
      "Cherry merah difermentasi secara anaerob dalam tong tertutup selama 2 hari dengan suhu terkontrol. Setelah itu dikupas dan dijemur selama 15–20 hari hingga kadar air 11–12%, lalu melalui proses hulling dan sortir manual.",
    flavorNotes: ["Caramel", "Tropical Fruit", "Sweet"],
    brewMethods: ["V60", "Aeropress", "French Press"],
    grind: "Medium",
    image: Anaerobic_Honey,
    stock: 20
  },
  {
    id: 5,
    name: "Anaerobic Natural",
    origin: "Ulian",
    roastLevel: "Light to Medium",
    price: 125000,
    weight: "250g",
    description:
      "Cherry merah difermentasi secara anaerob selama 3 hari tanpa pengupasan kulit, kemudian dijemur selama 20–30 hari. Metode ini menghasilkan profil rasa fruity, winey, dan kompleks. Tahap akhir meliputi hulling dan sortir manual.",
    flavorNotes: ["Berries", "Winey", "Dark Chocolate"],
    brewMethods: ["V60", "Kalita", "Aeropress"],
    grind: "Medium",
    image: Anaerobic_Natural,
    stock: 12
  }
];