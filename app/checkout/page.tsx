"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (typeof window !== "undefined") {
      //@ts-ignore
      window.FlutterwaveCheckout({
        public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
        tx_ref: Date.now().toString(),
        amount: total,
        currency: "NGN",
        payment_options: "card, mobilemoney, ussd",
        customer: {
          email: customer.email,
          phone_number: customer.phone,
          name: customer.name,
        },
        customizations: {
          title: "Grocery Store",
          description: "Payment for grocery items",
          logo: "/logo.png",
        },
        callback: function (response: any) {
          console.log(response);
          if (response.status === "successful") {
            clearCart();
            window.location.href = `/success?name=${encodeURIComponent(
              customer.name
            )}&amount=${total.toFixed(2)}`;
          } else {
            window.location.href = "/failed";
          }
        },
        onclose: function () {
          window.location.href = "/failed";
        },
      });
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Customer Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
              className="w-full border px-4 py-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
              className="w-full border px-4 py-3 rounded"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
              className="w-full border px-4 py-3 rounded"
              required
            />
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-6 shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-2 border-b pb-2"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <p className="mt-4 text-lg font-bold">Total: ₦{total.toFixed(2)}</p>

            <button
              onClick={handlePayment}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
// File: grocery-store/app/cart/page.tsx