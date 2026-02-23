import Fully_Washed from '../assets/images/products/Fully_Washed.png';
import Honey from '../assets/images/products/Honey.png';
import Natural_Ulian from '../assets/images/products/Natural_Ulian.png';
import Anaerobic_Honey from '../assets/images/products/Anaerobic_Honey.png';
import Anaerobic_Natural from '../assets/images/products/Anaerobic_Natural.png';

export const products = [
  {
    id: 1,
    name: "Fully Washed",
    origin: "Ulian",
    roastLevel: "Medium",
    price: 85000,
    weight: "250g",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    flavorNotes: ["Chocolate", "Spices", "Herbal"],
    brewMethods: ["V60", "Tubruk", "French Press"],
    grind: "Medium-Coarse",
      image: Fully_Washed,
    stock: 15
  },
  {
    id: 2,
    name: "Honey",
    origin: "Ulian",
    roastLevel: "Light",
    price: 95000,
    weight: "250g",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    flavorNotes: ["Citrus", "Lemon", "Brown Sugar"],
    brewMethods: ["V60", "Aeropress"],
    grind: "Medium",
      image: Honey,
    stock: 10
  },
  {
    id: 3,
    name: "Natural Ulian",
    origin: "Ulian",
    roastLevel: "Dark",
    price: 105000,
    weight: "250g",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    flavorNotes: ["Dark Chocolate", "Tobacco", "Spicy"],
    brewMethods: ["Tubruk", "French Press", "Espresso"],
    grind: "Coarse",
      image: Natural_Ulian,
    stock: 8
  },
  {
    id: 4,
    name: "Anaerobic Honey",
    origin: "Ulian",
    roastLevel: "Medium-Dark",
    price: 75000,
    weight: "250g",
    description: "Kopi Java dengan karakter klasik, earthy, low acidity, dengan hints of nuts.",
    flavorNotes: ["Nuts", "Earthy", "Caramel"],
    brewMethods: ["Tubruk", "French Press"],
    grind: "Medium-Coarse",
      image: Anaerobic_Honey,
    stock: 20
  },
  {
    id: 5,
    name: "Anaerobic Natural",
    origin: "Ulian",
    roastLevel: "Medium",
    price: 115000,
    weight: "250g",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    flavorNotes: ["Berries", "Chocolate", "Winey"],
    brewMethods: ["V60", "Kalita", "Aeropress"],
    grind: "Medium",
      image: Anaerobic_Natural,
    stock: 12
  }
];