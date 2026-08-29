import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaGold, ctaWhatsapp } from "./cta";
import { HeroVideoCarousel } from "./HeroVideoCarousel";

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = null;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setTilt({ x, y });
      });
    };
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* warm cream light wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-beige/70 blur-3xl" />
        <div className="absolute -top-24 right-1/4 size-[22rem] rounded-full bg-gold-soft/25 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[92rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 xl:gap-12">
        <div className="animate-rise text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-cream/80 px-4 py-1.5 text-[0.62rem] font-bold tracking-[0.24em] text-espresso shadow-soft">
            {BRAND.zeroMaidha}
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[0.98] font-medium text-primary sm:text-6xl lg:text-7xl">
            Baked to Impress.
            <br />
            <span className="text-gold-foil">Made to Crave.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            Premium oat-based cookies &amp; brownies, handcrafted with love.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link to="/cookies" className={ctaGold}>
              EXPLORE COOKIES
            </Link>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaWhatsapp}
            >
              <MessageCircle className="size-4" aria-hidden /> ORDER ON WHATSAPP
            </a>
          </div>
          <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground">
            {BRAND.phoneDisplay}
          </p>
        </div>

        {/* large cinematic hero video — the primary visual of the hero */}
        <div className="scene-3d relative w-full">
          <div
            className="relative"
            style={{
              transform: `rotateX(${-tilt.y * 2.5}deg) rotateY(${tilt.x * 3.5}deg) translateY(${
                -scroll * 0.05
              }px)`,
              transformStyle: "preserve-3d",
              transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <HeroVideoCarousel />
            <div
              aria-hidden
              className="mx-auto -mt-3 h-8 w-4/5 rounded-[50%] bg-plum/25 blur-2xl"
              style={{ transform: "translateZ(-40px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
