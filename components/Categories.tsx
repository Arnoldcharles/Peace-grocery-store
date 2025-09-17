"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaAppleAlt, FaCarrot, FaCheese, FaCookieBite } from "react-icons/fa";

const categories = [
  {
    name: "Fruits",
    icon: <FaAppleAlt className="text-red-500 text-5xl" />,
    link: "/shop?category=fruits",
    color: "from-red-100 to-red-200",
  },
  {
    name: "Vegetables",
    icon: <FaCarrot className="text-orange-500 text-5xl" />,
    link: "/shop?category=vegetables",
    color: "from-green-100 to-green-200",
  },
  {
    name: "Dairy",
    icon: <FaCheese className="text-yellow-500 text-5xl" />,
    link: "/shop?category=dairy",
    color: "from-yellow-100 to-yellow-200",
  },
  {
    name: "Snacks",
    icon: <FaCookieBite className="text-brown-500 text-5xl" />,
    link: "/shop?category=snacks",
    color: "from-orange-100 to-orange-200",
  },
];

export default function Categories() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Shop by Category
        </h2>
        <p className="mt-2 text-gray-600">
          Find fresh and quality groceries from your favorite categories.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href={cat.link}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md bg-gradient-to-br ${cat.color} hover:scale-105 transition`}
            >
              {cat.icon}
              <span className="mt-3 text-lg font-semibold text-gray-800">
                {cat.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
