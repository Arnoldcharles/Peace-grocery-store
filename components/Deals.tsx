"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";

const deals = products.slice(0, 3).map((p, i) => ({
  ...p,
  discount: i === 0 ? 20 : i === 1 ? 15 : 10,
}));

export default function Deals() {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 to-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Deals of the Day
        </h2>
        <p className="text-gray-600 mt-2">
          Don’t miss out on today’s special offers!
        </p>
      </div>

      {/* Deals Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal) => {
          const discountedPrice = (deal.price * (1 - deal.discount / 100)).toFixed(2);

          return (
            <motion.div
              key={deal.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center relative"
            >
              {/* Discount Badge */}
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
                -{deal.discount}%
              </span>

              <Image
                src={deal.image}
                alt={deal.name}
                width={150}
                height={150}
                className="object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {deal.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-3 mt-2">
                <p className="text-gray-400 line-through">₦{deal.price}</p>
                <p className="text-green-600 font-bold">₦{discountedPrice}</p>
              </div>

              {/* Button */}
              <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Add to Cart
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
