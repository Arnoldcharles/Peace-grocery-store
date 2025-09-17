// components/BrandsCarousel.tsx
"use client";
import Image from "next/image";

const brands = [
  { name: "Nike", logo: "/brands/nike.png" },
  { name: "Adidas", logo: "/brands/adidas.png" },
  { name: "Puma", logo: "/brands/puma.png" },
  { name: "Gucci", logo: "/brands/gucci.png" },
  { name: "Zara", logo: "/brands/zara.png" },
  { name: "Apple", logo: "/brands/apple.png" },
];

export default function Brands() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Brands & Partners</h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {brands.concat(brands).map((brand, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind keyframes for infinite scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
