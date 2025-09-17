// app/shop/page.tsx
"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Meat",
  "Snacks",
  "Drinks",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(100); // Default max price

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesPrice = p.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Our Shop</h1>
          <p className="text-gray-600">
            Discover fresh groceries, best deals, and quality products.
          </p>
        </div>
        {/* Mobile filter toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filter (desktop) */}
        <aside className="hidden lg:block w-1/4 bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 mb-6">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded transition ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* Price Filter */}
          <h2 className="text-xl font-semibold mb-4">Price Range</h2>
          <input
            type="range"
            min="1"
            max="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
          <p className="mt-2 text-gray-700">Up to: ₦{maxPrice}</p>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  <Link href={`/shop/${product.id}`}>
                    <div className="relative w-full h-40">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </Link>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {product.category}
                    </p>
                    <div className="mt-auto">
                      <p className="text-green-600 font-bold mb-3">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex gap-2">
                        {/*<button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                          Add to Cart
                        </button>*/}
                        <Link
                          href={`/shop/${product.id}`}
                          className="flex-1 text-center border py-2 rounded hover:bg-gray-100 transition"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Panel */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="text-gray-600 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="space-y-2 mb-6">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded transition ${
                        selectedCategory === cat
                          ? "bg-green-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="1"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
              <p className="mt-2 text-gray-700">Up to: ₦{maxPrice}</p>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
