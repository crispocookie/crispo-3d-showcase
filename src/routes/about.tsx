import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { BrandIntro } from "@/components/BrandIntro";
import { SocialSection } from "@/components/SocialSection";

const title = "About CRISPO COOKIES — Oat Bakes Made With Love";
const description =
  "Meet CRISPO COOKIES, a Nellore bakery crafting premium oat cookies and brownies with 100% ZERO MAIDHA and made-with-love care.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24">
      <h1 className="sr-only">About CRISPO COOKIES</h1>
      <AboutSection />
      <BrandIntro />
      <SocialSection />
    </div>
  );
}