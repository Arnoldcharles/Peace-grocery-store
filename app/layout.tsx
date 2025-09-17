import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grocery Store",
  description: "Online Grocery Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <Script
          id="flutterwave-script"
          src="https://checkout.flutterwave.com/v3.js"
          strategy="afterInteractive"
        />
        <CartProvider>
          <main className="pt-16">{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
