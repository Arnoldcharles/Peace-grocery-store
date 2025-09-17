"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import LoginModal from "./LoginModal";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // track scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-colors duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-green-600 to-green-400 shadow-md"
            : "bg-gradient-to-r from-green-500 to-green-300"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" onClick={handleCloseMenu}>
              <Image
                src="/logo.png"
                alt="Grocery Logo"
                width={40}
                height={40}
              />
            </Link>
            <span className="text-xl font-bold text-white">GroceryStore</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-200">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <FaShoppingCart className="text-white text-xl cursor-pointer hover:scale-110 transition" />
            </Link>

            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="px-3 py-1 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-3 py-1 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100"
              >
                Login
              </button>
            )}

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-gradient-to-b from-green-500 to-green-300 shadow-lg p-6 z-40"
            >
              <ul className="flex flex-col gap-6 text-white text-lg font-medium">
                <li>
                  <Link href="/" onClick={handleCloseMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" onClick={handleCloseMenu}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleCloseMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleCloseMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
