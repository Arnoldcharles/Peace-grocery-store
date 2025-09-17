"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, addToCart, decreaseFromCart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">Your cart is empty.</p>
          <Link
            href="/shop"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-6"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-green-600 font-bold">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => decreaseFromCart(item.id)}
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                        })
                      }
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border rounded-lg p-6 h-fit shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="text-gray-600 mb-2">
              Items: <span className="font-medium">{cart.length}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Total:{" "}
              <span className="text-green-600 font-bold text-lg">
                ₦{total.toFixed(2)}
              </span>
            </p>

            <Link href="/checkout" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition mb-3">
              Proceed to Checkout
            </Link>

            <button
              onClick={clearCart}
              className="w-full border py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
