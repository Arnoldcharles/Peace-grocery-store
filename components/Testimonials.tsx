"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Busy Mom",
    review:
      "This grocery store website has saved me so much time! I can easily shop for all my family’s needs and get them delivered fresh.",
    image: "/images/user1.png",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Fitness Trainer",
    review:
      "The fruits and vegetables are always fresh and organic. I love the discounts on healthy food. Highly recommended!",
    image: "/images/user2.png",
  },
  {
    id: 3,
    name: "Sophia Johnson",
    role: "Student",
    review:
      "Affordable prices, fast delivery, and amazing customer service. This is my go-to place for groceries online!",
    image: "/images/user3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-r from-white to-green-50 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted by thousands of happy customers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <p className="text-gray-600 mt-4 italic">"{t.review}"</p>
            <h3 className="mt-4 font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
