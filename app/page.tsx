import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Deals from "@/components/Deals";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Deals />
      <Testimonials />
      <Newsletter />
      <Brands />
    </div>
  );
}
