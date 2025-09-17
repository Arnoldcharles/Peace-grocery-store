"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link href="/shop" className="text-blue-600 underline mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: String(product.id),
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <div className="p-6">
      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ₦{product.price}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span className="text-lg">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
            <Link
              href="/shop"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id
            )
            .map((rel) => (
              <div
                key={rel.id}
                className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                <Link href={`/shop/${rel.id}`}>
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-40"
                  />
                  <h3 className="mt-3 text-lg font-semibold">{rel.name}</h3>
                  <p className="text-green-600 font-bold">${rel.price}</p>
                </Link>
                <button
                  onClick={() =>
                    addToCart({
                      id: String(rel.id),
                      name: rel.name,
                      price: rel.price,
                      image: rel.image,
                    })
                  }
                  className="mt-3 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
