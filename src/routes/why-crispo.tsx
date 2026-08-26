import { createFileRoute } from "@tanstack/react-router";
import { WhyCrispo } from "@/components/WhyCrispo";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

const title = "Why CRISPO — 100% ZERO MAIDHA Cookies";
const description =
  "Discover why CRISPO COOKIES makes premium oat cookies and brownies with zero maidha, no preservatives and carefully chosen ingredients.";

export const Route = createFileRoute("/why-crispo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyCrispoPage,
});

function WhyCrispoPage() {
  return (
    <div className="pt-24">
      <h1 className="sr-only">Why CRISPO COOKIES</h1>
      <WhyCrispo />
      <FeaturedCarousel />
    </div>
  );
}