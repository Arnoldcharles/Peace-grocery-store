"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 4.99,
    image: "/images/apple.png",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 3.49,
    image: "/images/banana.png",
  },
  {
    id: 3,
    name: "Carrots",
    price: 2.99,
    image: "/images/carrots.png",
  },
  {
    id: 4,
    name: "Tomatoes",
    price: 3.99,
    image: "/images/tomatoes.png",
  },
];

export default function FeaturedProducts() {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-green-50 to-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Products
        </h2>
        <p className="text-gray-600 mt-2">
          Fresh, organic, and healthy groceries just for you.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="object-contain"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-green-600 font-bold mt-2">₦{product.price}</p>
            <button
              onClick={() => handleAddToCart(product.id)}
              className={`mt-4 w-full py-2 rounded-lg transition ${
                cart.includes(product.id)
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
              disabled={cart.includes(product.id)}
            >
              {cart.includes(product.id) ? "Added" : "Add to Cart"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
