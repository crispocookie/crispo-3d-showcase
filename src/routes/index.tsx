import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { StorySection } from "@/components/StorySection";
import { WhyCrispo } from "@/components/WhyCrispo";
import { AboutSection } from "@/components/AboutSection";
import { SocialSection } from "@/components/SocialSection";
import { ContactSection } from "@/components/ContactSection";

const title = "CRISPO COOKIES — Premium Oat Cookies & Brownies";
const description =
  "Baked to impress, made to crave. Premium oat-based cookies and brownies with 100% ZERO MAIDHA, handcrafted in Nellore. Order on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductShowcase
        eyebrow="The Collection"
        subtitle="Switch between cookies and brownies — every box is 100% ZERO MAIDHA."
      />
      <FeaturedCarousel />
      <StorySection />
      <WhyCrispo />
      <AboutSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}
