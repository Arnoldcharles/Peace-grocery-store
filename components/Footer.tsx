// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-400 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <Image
            src="/logo.png"
            alt="Grocery Store"
            width={120}
            height={40}
            className="mb-4"
          />
          <p className="text-sm leading-6">
            Fresh groceries delivered to your doorstep. Quality products at the
            best prices every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/deals" className="hover:underline">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:underline">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com">
              <FaFacebookF className="text-2xl hover:text-gray-200" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-2xl hover:text-gray-200" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-2xl hover:text-gray-200" />
            </Link>
            <Link href="https://youtube.com">
              <FaYoutube className="text-2xl hover:text-gray-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Grocery Store. All rights reserved.
      </div>
    </footer>
  );
}
