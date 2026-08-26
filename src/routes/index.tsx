import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { StorySection } from "@/components/StorySection";
import { WhyCrispo } from "@/components/WhyCrispo";
import { AboutSection } from "@/components/AboutSection";
import { SocialSection } from "@/components/SocialSection";
import { ContactSection } from "@/components/ContactSection";
import { useMeta } from "@/hooks/use-meta";

const title = "CRISPO COOKIES — Premium Oat Cookies & Brownies";
const description =
  "Baked to impress, made to crave. Premium oat-based cookies and brownies with 100% ZERO MAIDHA, handcrafted in Nellore. Order on WhatsApp.";

export default function Index() {
  useMeta({ title, description });

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
