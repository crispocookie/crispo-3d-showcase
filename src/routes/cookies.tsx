import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { SeedShowcase } from "@/components/SeedShowcase";
import { GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaGold, ctaWhatsapp } from "@/components/cta";
import doubleChoc from "@/assets/double-chocolate-cookie.jpg";
import rose from "@/assets/rose-cookie.jpg";

const title = "Cookies — CRISPO COOKIES | 100% ZERO MAIDHA Oat Cookies";
const description =
  "Shop Double Chocolate, Rose, Pine Apple, Dry Seed and All Mix oat cookies from CRISPO. 100% ZERO MAIDHA, protein packed and handcrafted in Nellore.";

export const Route = createFileRoute("/cookies")({
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
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <PageHero
          eyebrow="The Cookie Collection"
          title="CRISPO COOKIES"
          subtitle="Wholesome ingredients. Irresistible flavours. Made with love."
          image={{ src: doubleChoc, alt: "Stack of CRISPO double chocolate oat cookies" }}
          secondaryImage={{ src: rose, alt: "CRISPO rose oat cookies with rose petals" }}
          actions={
            <>
              <a href="#cookie-collection" className={ctaGold}>
                <ShoppingBag className="size-4" aria-hidden /> SHOP COOKIES
              </a>
              <a
                href={whatsappLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaWhatsapp}
              >
                <MessageCircle className="size-4" aria-hidden /> ORDER ON WHATSAPP
              </a>
            </>
          }
        />

        <div id="cookie-collection">
          <ProductShowcase
            initialCategory="cookies"
            lockCategory
            eyebrow="Cookies"
            title="Five oat cookies, zero maidha."
            subtitle="Every box is made with pure oats powder, quality ingredients and no preservatives."
          />
        </div>

        <SeedShowcase />
        <FeaturedCarousel />
      </div>
    </PageTransition>
  );
}
