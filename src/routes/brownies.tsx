import { createFileRoute } from "@tanstack/react-router";
import { ProductShowcase } from "@/components/ProductShowcase";
import { StorySection } from "@/components/StorySection";

const title = "Brownies — CRISPO COOKIES";
const description =
  "Rich. Fudgy. Irresistible. Double Chocolate Oats Brownie and Kaju Oats Brownie, made with oats and 100% ZERO MAIDHA.";

export const Route = createFileRoute("/brownies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BrowniesPage,
});

function BrowniesPage() {
  return (
    <div className="pt-24">
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
