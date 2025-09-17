export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 4.99,
    image: "/images/apple.png",
    category: "Fruits",
    description: "Crisp and juicy apples, perfect for a healthy snack.",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 3.49,
    image: "/images/banana.png",
    category: "Fruits",
    description: "Sweet organic bananas packed with energy and nutrients.",
  },
  {
    id: 3,
    name: "Carrots",
    price: 2.99,
    image: "/images/carrots.png",
    category: "Vegetables",
    description: "Fresh crunchy carrots, great for salads and cooking.",
  },
  {
    id: 4,
    name: "Tomatoes",
    price: 3.99,
    image: "/images/tomatoes.png",
    category: "Vegetables",
    description: "Ripe red tomatoes full of flavor and freshness.",
  },
  {
    id: 5,
    name: "Broccoli",
    price: 2.5,
    image: "/images/broccoli.png",
    category: "Vegetables",
    description: "Fresh green broccoli rich in vitamins and minerals.",
  },
  {
    id: 6,
    name: "Strawberries",
    price: 5.99,
    image: "/images/strawberries.png",
    category: "Fruits",
    description: "Sweet and tangy strawberries, perfect for desserts.",
  },
];
