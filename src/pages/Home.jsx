import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import TechnologiesSection from "../components/TechnologiesSection";

import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ProductsSection />
      <TechnologiesSection />
      <WhyChooseUs />
    </div>
  );
}
