import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaGold, ctaWhatsapp } from "./cta";
import { HeroVideoCarousel } from "./HeroVideoCarousel";

/**
 * Full-bleed cinematic video hero.
 * The video fills the entire hero; content overlays it on the left.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden sm:min-h-[100svh] sm:items-center">
      {/* full-bleed video background */}
      <HeroVideoCarousel />

      {/* cinematic readability overlays — never a solid panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 [background:linear-gradient(100deg,oklch(0.22_0.05_300/0.78)_0%,oklch(0.25_0.06_300/0.5)_38%,oklch(0.28_0.07_300/0.16)_62%,transparent_80%)]"
      />
      {/* soft cream wash at the very top so the navigation stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 [background:linear-gradient(180deg,oklch(0.972_0.017_88/0.75)_0%,oklch(0.972_0.017_88/0.3)_55%,transparent_100%)]"
      />
      {/* gentle bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 [background:linear-gradient(0deg,oklch(0.22_0.05_300/0.45)_0%,transparent_100%)]"
      />

      {/* overlaid hero content — left side, clear of the video subject */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-24 pb-10 sm:px-6 sm:pb-16">
        <div className="animate-rise max-w-xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/70 bg-espresso/30 px-3 py-1 text-[0.55rem] font-bold tracking-[0.2em] text-cream shadow-soft backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[0.62rem] sm:tracking-[0.24em]">
            {BRAND.zeroMaidha}
          </span>
          <h1 className="mt-4 font-display text-[2.1rem] leading-[1.02] font-medium text-cream drop-shadow-[0_2px_18px_oklch(0.22_0.05_300/0.45)] sm:mt-6 sm:text-6xl lg:text-7xl">
            Baked to Impress.
            <br />
            <span className="text-gold-foil">Made to Crave.</span>
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/85 sm:mt-6 sm:text-base lg:text-lg">
            Premium oat-based cookies &amp; brownies, handcrafted with love.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-9 sm:gap-3">
            <Link to="/cookies" className={`${ctaGold} h-10 px-5 text-[0.6rem] sm:h-12 sm:px-7 sm:text-xs`}>
              EXPLORE COOKIES
            </Link>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaWhatsapp} h-10 px-5 text-[0.6rem] sm:h-12 sm:px-7 sm:text-xs`}
            >
              <MessageCircle className="size-3.5 sm:size-4" aria-hidden /> ORDER ON WHATSAPP
            </a>
          </div>
          <p className="mt-4 text-[0.65rem] tracking-[0.2em] text-cream/70 sm:mt-6 sm:text-xs">
            {BRAND.phoneDisplay}
          </p>
        </div>
      </div>
    </section>
  );
}
