import { ProductShowcase } from "@/components/ProductShowcase";
import { StorySection } from "@/components/StorySection";
import { useMeta } from "@/hooks/use-meta";

const title = "Brownies — CRISPO COOKIES";
const description =
  "Rich. Fudgy. Irresistible. Double Chocolate Oats Brownie and Kaju Oats Brownie, made with oats and 100% ZERO MAIDHA.";

export default function BrowniesPage() {
  useMeta({ title, description });

  return (
    <div className="pt-20 sm:pt-24">
      <h1 className="sr-only">CRISPO COOKIES Brownie Collection</h1>
      <ProductShowcase
        initialCategory="brownies"
        lockCategory
        eyebrow="Crispo Brownies"
        title="Rich. Fudgy. Irresistible."
        subtitle="Oat-based brownies with deep chocolate flavour and premium cashews."
      />
      <StorySection />
    </div>
  );
}
