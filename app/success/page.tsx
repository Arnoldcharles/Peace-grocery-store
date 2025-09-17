"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const amount = searchParams.get("amount");

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        🎉 Payment Successful!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Thank you {name ? name : "Customer"} for your purchase.
      </p>
      {amount && (
        <p className="text-xl font-semibold mb-6">
          Amount Paid: ₦{amount}
        </p>
      )}

      <Link
        href="/shop"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Continue Shopping
      </Link>
    </section>
  );
}
