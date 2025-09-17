"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import Link from "next/link";

export default function Hero() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-green-200 via-yellow-100 to-orange-200 overflow-hidden">
      {/* Background animated gradient blobs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.8 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl w-full px-6 lg:px-12">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-green-800 leading-tight">
            Welcome{" "}
            <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
              {user?.displayName || user?.email || "Guest"}
            </span>
            !
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl">
            Your one-stop grocery store for fresh fruits, veggies, and daily
            essentials. Shop easily and get it delivered to your door!
          </p>
          <Link
            href="/shop"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
            src="/hero.png"
            alt="Groceries"
            className="w-full max-w-sm md:max-w-md lg:max-w-xl drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
