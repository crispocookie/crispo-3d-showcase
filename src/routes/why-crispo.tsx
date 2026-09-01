import { WhyCrispo } from "@/components/WhyCrispo";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { ZeroMaidhaFeature } from "@/components/ZeroMaidhaFeature";
import { CravingScroll } from "@/components/CravingScroll";
import doubleChoc2 from "@/assets/double-chocolate-cookie-2.jpg";
import seed from "@/assets/dry-seed-cookie.jpg";
import { useMeta } from "@/hooks/use-meta";

const title = "Why CRISPO — 100% ZERO MAIDHA Oat Cookies & Brownies";
const description =
  "Why CRISPO: because every bite should be worth remembering. Oat-based cookies and brownies with 100% ZERO MAIDHA, no artificial flavors and no preservatives.";

export default function WhyCrispoPage() {
  useMeta({ title, description });

  return (
    <PageTransition>
      <div className="pt-20 sm:pt-24">
        <PageHero
          eyebrow="Our Promise"
          title="WHY CRISPO?"
          subtitle="Because every bite should be worth remembering."
          image={{
            src: doubleChoc2,
            alt: "Close-up of a CRISPO double chocolate cookie broken open",
          }}
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
