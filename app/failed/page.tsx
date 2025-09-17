"use client";

import Link from "next/link";

export default function FailedPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">❌ Payment Failed</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your transaction could not be completed. Please try again.
      </p>
      <Link
        href="/checkout"
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
      >
        Retry Payment
      </Link>
    </section>
  );
}
