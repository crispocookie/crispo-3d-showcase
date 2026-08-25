import { createFileRoute } from "@tanstack/react-router";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

const title = "Cookies — CRISPO COOKIES";
const description =
  "Double Chocolate, Rose, Pine Apple, Dry Seed and All Mix oat cookies. 100% ZERO MAIDHA, protein packed and handcrafted.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="pt-24">
      <ProductShowcase
        initialCategory="cookies"
        lockCategory
        eyebrow="Cookies"
        title="Crispo Cookies"
        subtitle="Five oat-based cookies, each made with pure oats powder and zero maidha."
      />
      <FeaturedCarousel />
    </div>
  );
}
