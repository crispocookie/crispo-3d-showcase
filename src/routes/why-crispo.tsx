import { createFileRoute } from "@tanstack/react-router";
import { WhyCrispo } from "@/components/WhyCrispo";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { ZeroMaidhaFeature } from "@/components/ZeroMaidhaFeature";
import { CravingScroll } from "@/components/CravingScroll";
import doubleChoc2 from "@/assets/double-chocolate-cookie-2.jpg";
import seed from "@/assets/dry-seed-cookie.jpg";

const title = "Why CRISPO — 100% ZERO MAIDHA Oat Cookies & Brownies";
const description =
  "Why CRISPO: because every bite should be worth remembering. Oat-based cookies and brownies with 100% ZERO MAIDHA, no artificial flavors and no preservatives.";

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
    <PageTransition>
      <div className="pt-24">
        <PageHero
          eyebrow="Our Promise"
          title="WHY CRISPO?"
          subtitle="Because every bite should be worth remembering."
          image={{ src: doubleChoc2, alt: "Close-up of a CRISPO double chocolate cookie broken open" }}
          secondaryImage={{ src: seed, alt: "CRISPO dry seed cookies with bowls of seeds" }}
        />

        <ZeroMaidhaFeature copy="A wholesome choice made with oats, crafted for people who want delicious flavour without compromising on what goes into every bite." />

        <WhyCrispo />
        <CravingScroll />
        <FeaturedCarousel />
      </div>
    </PageTransition>
  );
}
