import { Link } from "react-router-dom";
import { Leaf, MessageCircle } from "lucide-react";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaGold, ctaWhatsapp } from "./cta";
import { HeroVideoCarousel } from "./HeroVideoCarousel";

/**
 * Full-bleed cinematic video hero.
 * The video fills the entire hero; content overlays it on the left.
 */
export function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[var(--gradient-royal)] sm:min-h-[100svh] sm:flex-row sm:items-center sm:bg-transparent">
      {/* full-bleed video background */}
      <HeroVideoCarousel />

      {/* cinematic readability overlays — never a solid panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 hidden [background:linear-gradient(100deg,oklch(0.22_0.05_300/0.78)_0%,oklch(0.25_0.06_300/0.5)_38%,oklch(0.28_0.07_300/0.16)_62%,transparent_80%)] sm:block"
      />
      {/* soft cream wash at the very top so the navigation stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-28 [background:linear-gradient(180deg,oklch(0.972_0.017_88/0.75)_0%,oklch(0.972_0.017_88/0.3)_55%,transparent_100%)] sm:block"
      />
      {/* gentle bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-40 [background:linear-gradient(0deg,oklch(0.22_0.05_300/0.45)_0%,transparent_100%)] sm:block"
      />

      {/* overlaid hero content — left side, clear of the video subject */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-8 pb-3 sm:px-6 sm:pt-24 sm:pb-16">
        <div className="animate-rise mx-auto max-w-xl text-center sm:mx-0 sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/70 bg-cream/90 px-3 py-1 text-[0.55rem] font-bold tracking-[0.2em] text-espresso shadow-soft backdrop-blur-sm sm:bg-espresso/30 sm:px-4 sm:py-1.5 sm:text-[0.62rem] sm:tracking-[0.24em] sm:text-cream sm:tracking-[0.24em]">
            {BRAND.zeroMaidha}
          </span>
          <h1 className="mt-4 font-display text-[2.1rem] leading-[1.02] font-medium text-plum drop-shadow-[0_2px_18px_oklch(0.22_0.05_300/0.45)] sm:mt-6 sm:text-6xl sm:text-gold lg:text-7xl">
            Baked to Impress.
            <br />
            <span className="text-gold sm:text-gold-foil">Made to Crave.</span>
          </h1>
          <div aria-hidden className="mt-4 flex justify-center text-gold sm:hidden">
            <Leaf className="size-7" strokeWidth={1.25} />
          </div>
          <div className="mx-auto mt-3 w-full max-w-md rounded-xl border border-gold/35 px-4 py-3 shadow-soft [background:var(--gradient-gold)] sm:contents">
            <p className="mt-0 text-sm leading-relaxed text-black sm:mt-6 sm:text-base sm:text-cream/85 lg:text-lg">
              Premium oat-based cookies &amp; brownies,
              <br className="sm:hidden" /> handcrafted with love.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-9 sm:justify-start sm:gap-3">
            <Link to="/cookies" className={ctaGold}>
              EXPLORE COOKIES
            </Link>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaWhatsapp}
            >
              <MessageCircle className="size-3.5 sm:size-4" aria-hidden /> ORDER ON WHATSAPP
            </a>
          </div>
          <p className="mt-4 text-[0.65rem] tracking-[0.2em] text-lavender/90 sm:mt-6 sm:text-xs sm:text-cream/70">
            {BRAND.phoneDisplay}
          </p>
        </div>
      </div>
    </section>
  );
}
